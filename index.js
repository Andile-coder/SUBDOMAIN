const pupperteer= require("puppeteer")
exports.findPdf = async (domain) =>{
  console.log("This is a message from the demo package");
  let url=domain;
  const browser = await pupperteer.launch({headless:false})
  const page = await browser.newPage();
  page.setDefaultNavigationTimeout(0);
  let arrLinks=[domain];
  let pdf=[];
  while(arrLinks.length>0){
      await page.goto(arrLinks[0]);
      const links =await page.$$eval("a",(i)=>{
          return arr=i.map(x=>x.href)
      })
      links.forEach(link=>arrLinks.push(link))
      arrLinks=[... new Set(arrLinks)]
      arrLinks.shift();
      arrLinks=arrLinks.filter(link=>link.includes(url)||link.includes(".pdf"))
      pdf=arrLinks.filter(link=>link.includes(".pdf"))
      pdf=[... new Set(pdf)]
  }
  console.log(pdf) 
  await browser.close()
}