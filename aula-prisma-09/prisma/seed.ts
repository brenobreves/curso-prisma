import prisma from "../src/database";

async function startSeed() {
    return await prisma.customer.upsert({
      create: {
        document: "133.245.497-60",
        firstName: "Geraldo Luiz",
        lastName: "Datena"
      },
      update: {},
      where: {
        document: "133.245.497-60"
      }
    })
  }

async function main() {
    return startSeed()
}

main()
.then(()=>console.log("Seed succesfully exited"))
.catch(async (e)=>{
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
})