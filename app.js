const puppeteer = require("puppeteer");

(async () => {
  //Aqui você vai inserir os telefones.
  var phone = ["92985141045", "92986455800"];

  //Aqui você insere a mensagem que você
  var mensagem = "Oi, sou seu bot automatizado";

  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(
    "https://web.whatsapp.com/send?phone=+" +
      phone[0] +
      "&text=" +
      mensagem +
      ""
  );
  await delay(20000);

  console.log("Conectado com sucesso!");
  console.log("Enviando mensagem");

  await page.click(
    "#main > footer > div._2lSWV._3cjY2.copyable-area > div > span:nth-child(2) > div > div._2xy_p._1bAtO > div._1OT67 > div > div > span"
  );
  await delay(10000);

  const imageinput = await page.$(
    "#main > footer > div._2lSWV._3cjY2.copyable-area > div > span:nth-child(2) > div > div._2xy_p._1bAtO > div._1OT67 > div > span > div > div > ul > li:nth-child(1) > button > input[type=file]"
  );
  imageinput.uploadFile("./acpr.png");
  await delay(10000);

  await page.click("span[data-testid='send']");
  await delay(5000);

  for (var index = 1; index < phone.length; index++) {
    await page.goto(
      "https://web.whatsapp.com/send?phone=+" +
        phone[index] +
        "&text=" +
        mensagem +
        ""
    );
    await delay(5000);
    console.log("Enviando mensagem");

    await page.click(
      "#main > footer > div._2lSWV._3cjY2.copyable-area > div > span:nth-child(2) > div > div._2xy_p._1bAtO > div._1OT67 > div > div > span"
    );
    await delay(5000);

    const imageinput = await page.$(
      "#main > footer > div._2lSWV._3cjY2.copyable-area > div > span:nth-child(2) > div > div._2xy_p._1bAtO > div._1OT67 > div > span > div > div > ul > li:nth-child(1) > button > input[type=file]"
    );
    imageinput.uploadFile("./acpr.png");
    await delay(5000);

    await page.click("span[data-testid='send']");
    await delay(20000);
  }
})();
function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}
