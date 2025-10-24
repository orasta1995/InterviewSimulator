﻿// Global variable to store the last question
let lastQuestionText = "";

// Buttons
const startButton = document.getElementById("start");
const sendButton = document.getElementById("send");

// Disable buttons until connection is ready
startButton.disabled = true;
sendButton.disabled = true;

// Create SignalR connection
const connection = new signalR.HubConnectionBuilder()
    .withUrl("/hubs/interview")
    .withAutomaticReconnect()
    .build();

// Listen for messages from server
connection.on("ReceiveMessage", msg => {
    const chat = document.getElementById("chat");
    const p = document.createElement("div");
    p.innerHTML = `<b>${msg.from}</b> [${msg.type}]: ${msg.text}`;
    chat.appendChild(p);
    chat.scrollTop = chat.scrollHeight;

    console.log("Received message:", msg);

    // Save last question for submitting answer
    if (msg.type === "question") {
        lastQuestionText = msg.text;
    }
});

// Start the SignalR connection
connection.start()
    .then(() => {
        console.log("Connected to InterviewHub");
        startButton.disabled = false;
        sendButton.disabled = false;
    })
    .catch(err => console.error("SignalR connection error:", err));

// Handle "Start Interview" button
startButton.onclick = async () => {
    if (connection.state !== signalR.HubConnectionState.Connected) {
        alert("Connection is not ready yet. Please wait.");
        return;
    }

    const role = document.getElementById("role").value;
    const level = document.getElementById("level").value;

    // Clear chat for new interview
    document.getElementById("chat").innerHTML = "";
    lastQuestionText = "";

    try {
        console.log("Invoking StartInterview with role:", role, "level:", level);
        await connection.invoke("StartInterview", role, level);
    } catch (err) {
        console.error("Error starting interview:", err);
    }
};

// Handle "Submit Answer" button
sendButton.onclick = async () => {
    const answer = document.getElementById("answer").value.trim();
    if (!answer) {
        alert("Please enter your answer.");
        return;
    }
    if (!lastQuestionText) {
        alert("No question available to answer yet.");
        return;
    }

    try {
        console.log("Submitting answer:", answer, "for question:", lastQuestionText);
        await connection.invoke("SubmitAnswer", lastQuestionText, answer);
        document.getElementById("answer").value = "";
    } catch (err) {
        console.error("Error submitting answer:", err);
    }
};
