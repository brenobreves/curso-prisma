import prisma from "./database";

async function teste(){
  const students = await prisma.student.groupBy({
    by:["class"],
    _count:{
      id:true
    },
    where:{
      jobId:{
        equals: null
      }
    },
    orderBy:{
      _count:{
        id:'desc'
      }
    }
  })
  console.log(students);
}

teste()