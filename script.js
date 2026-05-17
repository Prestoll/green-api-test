const idInstance = document.getElementById("idInstance");
const apiToken = document.getElementById("apiToken");

const phoneNumber = document.getElementById("phoneNumber");
const message = document.getElementById("message");
const fileUrl = document.getElementById("fileUrl");

const responseField = document.getElementById("response");

const getSettingsBtn = document.getElementById("getSettingsBtn");
const getStateBtn = document.getElementById("getStateBtn");
const sendMessageBtn = document.getElementById("sendMessageBtn");
const sendFileBtn = document.getElementById("sendFileBtn");

function showResponse(data) {
    responseField.value = JSON.stringify(data, null, 2);
}

async function getSettings() {

    const url =
        `https://api.green-api.com/waInstance${idInstance.value}/getSettings/${apiToken.value}`;

    const response = await fetch(url);

    const data = await response.json();

    showResponse(data);
}

getSettingsBtn.addEventListener("click", getSettings);

async function getStateInstance() {

    const url =
        `https://api.green-api.com/waInstance${idInstance.value}/getStateInstance/${apiToken.value}`;

    const response = await fetch(url);

    const data = await response.json();

    showResponse(data);
}

getStateBtn.addEventListener("click", getStateInstance);

async function sendMessage() {

    const url =
        `https://api.green-api.com/waInstance${idInstance.value}/sendMessage/${apiToken.value}`;

    const response = await fetch(url, {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            chatId: `${phoneNumber.value}@c.us`,
            message: message.value
        })
    });

    const data = await response.json();

    showResponse(data);
}

sendMessageBtn.addEventListener("click", sendMessage);

async function sendFileByUrl() {

    const url =
        `https://api.green-api.com/waInstance${idInstance.value}/sendFileByUrl/${apiToken.value}`;

    const response = await fetch(url, {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            chatId: `${phoneNumber.value}@c.us`,
            urlFile: fileUrl.value,
            fileName: "file"
        })
    });

    const data = await response.json();

    showResponse(data);
}

sendFileBtn.addEventListener("click", sendFileByUrl);