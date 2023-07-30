
import { PrismaClient } from "@prisma/client";
declare global {
    var prisma: PrismaClient; // This must be a `var` and not a `let / const`
  }
  
  
  let prisma: PrismaClient;
//   log query
//   const prisma = new PrismaClient({
//     log: ["query"],
//   });

  
  if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
  } else {
    if (!global.prisma) {
      global.prisma = new PrismaClient({
        log: ["query"],
      });
    }
    prisma = global.prisma;
  }
  
  export default prisma;