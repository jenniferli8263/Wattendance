# Wattendance
![image](https://github.com/jenniferli8263/wattendance/assets/75101197/4ddd1465-a5cd-4a0e-b7aa-9a22ca6ada5f)

Wattendance is a full-stack web application that uses facial recognition to automatically record/track attendance for the University of Waterloo's Software Engineering 2028 class.

#Technologies
Frontend: React.js, Material UI
Backend: Node.js, MySQL, AWS
Other: Raspberry Pi, Python, OpenCV

The facial recognition model was trained with OpenCV on the Raspberry Pi, and upon recognizing a student, it will send attendance data via an API request to our website, which will then update the user's profile in real-time.
