class AppchargeCheckout {
  constructor(
    appchargeCheckoutSrc = "https://ind-checkout.appcharge.com",
    origin = window.location.origin
  ) {
    this.init();
    this.appchargeCheckoutSrc = appchargeCheckoutSrc;
    this.origin = origin;
  }

  init() {
    this.initChargeCheckout();
  }

  initChargeCheckout() {
    const body = document.querySelector("body");
    body.innerHTML =
      body.innerHTML +
      `<div id="__acCheckout" style="width: 100vw; height: 100vh;
        background-color: rgba(0, 0, 0, 0.5); position: absolute; top: 0; left: 0; z-index: 10000; justify-content: center; align-items: center;">
        </div>`;
  }

  show() {
    const acCheckout = document.querySelector("#__acCheckout");
    acCheckout.style.display = "flex";
  }

  hide() {
    const acCheckout = document.querySelector("#__acCheckout");
    acCheckout.style.display = "none";
  }

  createCheckout(priceInCents, playerId = "0", sessionMetadata = {}) {
    const hide = this.hide;
    const acCheckout = document.querySelector("#__acCheckout");
    acCheckout.innerHTML = ``;
    acCheckout.innerHTML =
      acCheckout.innerHTML +
      `<div style="border-radius: 30px; border: 4px solid rgb(102, 163, 255); background: rgb(28, 19, 79); box-shadow: rgb(207, 252, 255) 0px 0px 30px 0px; width: 450px; height: 500px; display: flex; justify-content: center; align-items: center; position: relative;">
        <button onclick="document.querySelector('#__acCheckout').style.display = 'none'" style="border: 0;
        background: transparent;
        color: white;
        font-size: 24px;
        padding: 16px;
        position: absolute;
        top: 0;
        right: 16px;
        cursor: pointer;
        z-index: 1000000;"
        >X</button>
        <iframe src="${
          this.appchargeCheckoutSrc
        }/?playerId=${playerId}&price=${priceInCents}&sessionMetadata=${JSON.stringify(
        sessionMetadata
      )}&bootLocation=${this.origin}"}
        title="checkout"
        style="position: relative;
        z-index: 100000;
        width: 750px;
        height: 530px;
        border: 0px;
        margin-top: -32px"></iframe>
    </div>`;
  }
}

const appchargeCheckout = new AppchargeCheckout();

appchargeCheckout.show();
appchargeCheckout.createCheckout(100);
appchargeCheckout.hide();
