import passport from "passport";
import passportJwt from "passport-jwt"
import prisma from "../lib/prisma.js";

const { Strategy: JwtStrategy, ExtractJwt } = passportJwt

passport.use(
  new JwtStrategy(
    { jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), secretOrKey: process.env.JWT_SECRET },
    async (payload, done) => {
      try {
        const user = await prisma.user.findFirst({ where: { id: payload.sub } });
        if (!user) return done(null, false, { post: "Incorrect username" });
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    },
  ),
);



export { passport };
