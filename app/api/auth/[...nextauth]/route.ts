import NextAuth, { NextAuthOptions, Session, User as AuthUser } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { connectDB } from "@utils/database";
import User from "@models/user";

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  callbacks: {
    async session({ session }: { session: Session }) {

      await connectDB();

      const sessionUser = await User.findOne({ email: session.user?.email });

      if (sessionUser) {
        session.user!.id = sessionUser._id.toString();
      }

      return session;
    },

    async signIn({ profile }: { profile?: AuthUser["profile"] }) {
      try {
        await connectDB();

        if (!profile?.email) {
          console.error("Profile email not found!");
          return false;
        }

        const userExists = await User.findOne({ email: profile.email });

        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name?.replace(/\s+/g, "").toLowerCase(),
            image: profile.image,
          });
        }

        return true;
      } catch (error) {
        console.error("Error during sign-in:", error);
        return false;
      }
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
