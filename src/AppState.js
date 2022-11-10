import { reactive } from 'vue'
import { School } from './models/School.js'
import { Skill } from './models/Skill.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

  education: [
    new School({
      Name: "Kuna High School",
      Class: "2021",
      Picture: "https://imgs.search.brave.com/p8t3pILNoZkEJIIrXhbgBdoVzLvihPsAgSmzQrGT5q4/rs:fit:1200:796:1/g:ce/aHR0cHM6Ly9ibG94/aW1hZ2VzLmNoaWNh/Z28yLnZpcC50b3du/bmV3cy5jb20vaWRh/aG9wcmVzcy5jb20v/Y29udGVudC90bmNt/cy9hc3NldHMvdjMv/ZWRpdG9yaWFsLzEv/ZjIvMWYyNDJjZTkt/YjE3NS01ZWQ1LWE1/NTItOGNkNzY1OTgy/ZTk0LzVmNTk3MDA2/YTAxYjAuaW1hZ2Uu/anBnP3Jlc2l6ZT0x/MjAwJTJDNzk2",
      Location: "Kuna, Idaho",
      Link: "https://www.kunaschools.org/kunahigh"
    }),
    new School({
      Name: "Boise CodeWorks",
      Class: "Fall 2022",
      Picture: "https://imgs.search.brave.com/oB5oWKQwWj01VwxskKVLBFJikYcgl4f3zAIapNGQxfY/rs:fit:500:500:1/g:ce/aHR0cHM6Ly9pZGFo/b3BvdGF0b2Ryb3Au/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE2LzA5L2N3LWxv/Z28ucG5n",
      Location: "Boise, Idaho",
      Link: "https://boisecodeworks.com/"
    })
  ],

  skills: [
    new Skill({
      Name: "Google Suite",
      Description: "Document, Presentation, and Sheets Editor",
      Icons: [
        {
          Img: "https://imgs.search.brave.com/ywCxl-GUJ3zHTrsuDSe9kCq1boyT8f1OX77BF1FQouA/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9k/L2RhL0dvb2dsZV9E/cml2ZV9sb2dvLnBu/Zw",
          Link: "https://www.google.com/drive/"
        },
        {
          Img: "https://imgs.search.brave.com/H55Hh6wii-tXq6ysyMN2ksky6gHiNv70pCRLPoS9-L4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdG9y/YWdlLmdvb2dsZWFw/aXMuY29tL2d3ZWIt/dW5pYmxvZy1wdWJs/aXNoLXByb2QvaW1h/Z2VzL0dvb2dsZS1E/b2NzLWxvZ28tdHJh/bnNwYXJlbnQubWF4/LTI4MDB4MjgwMC5w/bmc",
          Link: "https://www.google.com/drive/"
        },
      ]
    }),
    new Skill({
      Name: "Adobe Illustrator",
      Description: "Vector Based Design Software",
      Icons: [
        {
          Img: "https://imgs.search.brave.com/QyAEJLxe3bvcEBvw_0En5HDgpCnqFRl9MTVpZgOHUdY/rs:fit:920:920:1/g:ce/aHR0cHM6Ly9jbGlw/YXJ0Y3JhZnQuY29t/L2ltYWdlcy9hZG9i/ZS1sb2dvLTMucG5n",
          Link: "https://www.adobe.com/"
        },
        {
          Img: "https://imgs.search.brave.com/rdP-mZPAIySXYMR3amKYoy9V2Wo6qT7hPWoCr0kEplQ/rs:fit:1200:1170:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9mL2ZiL0Fk/b2JlX0lsbHVzdHJh/dG9yX0NDX2ljb24u/c3ZnLzEyMDBweC1B/ZG9iZV9JbGx1c3Ry/YXRvcl9DQ19pY29u/LnN2Zy5wbmc",
          Link: "https://www.adobe.com/products/illustrator.html"
        }
      ]
    }),
    new Skill({
      Name: "Adobe InDesign",
      Description: "Overall Design Software that can create Posters, Business Cards, Web Pages, Books, and Many More",
      Icons: [
        {
          Img: 
          "https://imgs.search.brave.com/QyAEJLxe3bvcEBvw_0En5HDgpCnqFRl9MTVpZgOHUdY/rs:fit:920:920:1/g:ce/aHR0cHM6Ly9jbGlw/YXJ0Y3JhZnQuY29t/L2ltYWdlcy9hZG9i/ZS1sb2dvLTMucG5n",
          Link: "https://www.adobe.com/"
        },
        {
          Img: 
          "https://imgs.search.brave.com/kAzHBhDlByq2QJdDBjNeENgBDG6Rbh2n8q4NjvZAw6A/rs:fit:1200:1170:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi80LzQ4L0Fk/b2JlX0luRGVzaWdu/X0NDX2ljb24uc3Zn/LzEyMDBweC1BZG9i/ZV9JbkRlc2lnbl9D/Q19pY29uLnN2Zy5w/bmc",
          Link: "https://www.adobe.com/products/indesign.html"
        },
      ]
    }),
    new Skill({
      Name: "Python from CodeSkulptor",
      Description: "A programming language that is very easy to learn and get used to.",
      Icons: [
        {
          Img: 
          "https://imgs.search.brave.com/vB3rIUOwUdSCy9FquSiK2jlHfO7i8b1KcIbEvkFdqWs/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9sb2dv/cy1kb3dubG9hZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMTAvUHl0aG9u/X2xvZ29faWNvbi5w/bmc",
          Link: "https://www.python.org/"
        },
        {
          Img: 
          "https://py3.codeskulptor.org/icon.svg",
          Link: "https://py3.codeskulptor.org/"
        },
      ]
    }),
    new Skill({
      Name: "Java from IntelliJ Idea",
      Description: "Another programming language that is not as easy to learn, but faster since it is more strict than Python",
      Icons: [
        {
          Img: 
          "https://imgs.search.brave.com/DUR9TwXHA5oH-kXMndhMbAiZ2p7wwKNbXleC3G0ioqI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/cGlrcG5nLmNvbS9w/bmdsL2IvMTQ2LTE0/NjkxNDZfamF2YS1s/b2dvLXRyYW5zcGFy/ZW50LXBuZy5wbmc",
          Link: "https://www.java.com/en/"
        },
        {
          Img: 
          "https://imgs.search.brave.com/nBKhAEzefUeVMP8ozvE1Y_QPeOPM3aYVqqB8ls3gock/rs:fit:1024:1024:1/g:ce/aHR0cDovL2xvZ29u/b2lkLmNvbS9pbWFn/ZXMvaW50ZWxsaWot/aWRlYS1sb2dvLnBu/Zw",
          Link: "https://www.jetbrains.com/idea/"
        },
      ]
    }),
    new Skill({
      Name: "HTML",
      Description: "HyperText Markup Language is a programming language that acts as the structure of all websites",
      Icons: [
        {
          Img: 
          "https://imgs.search.brave.com/zL1aNqP7HnOUklaPf_rc9ZO7m4cuiGSBGsTFfOxdab4/rs:fit:800:800:1/g:ce/aHR0cHM6Ly9wNy5o/aWNsaXBhcnQuY29t/L3ByZXZpZXcvMTAw/NS81MTEvNjMxL3dl/Yi1kZXZlbG9wbWVu/dC1odG1sLWxvZ28t/d29ybGQtd2lkZS13/ZWItY29uc29ydGl1/bS1jcmVhdGUtaHRt/bC1zaWduYXR1cmUu/anBn",
        },
      ]
    }),
    new Skill({
      Name: "CSS",
      Description: "Cascading Style Sheets is a programming language which helps designing a website and give it life",
      Icons: [
        {
          Img: 
          "https://imgs.search.brave.com/4xBk0ZsFTwYko4kDSzPK-5Iq2CUZUle1UqtPicK_IDE/rs:fit:900:1200:1/g:ce/aHR0cHM6Ly9pbWFn/ZS5wbmdhYWEuY29t/LzMxMS8zOTIwMzEx/LW1pZGRsZS5wbmc",
        },
      ]
    }),
    new Skill({
      Name: "JS - JavaScript",
      Description: "JavaScript is the main backbone of a website allowing it to be reactive and conform to the need of the user",
      Icons: [
        {
          Img: 
          "https://imgs.search.brave.com/_aIU16nzGl9AIMH8cqswbGR_ZzSSQG2yfi44_b4GNJM/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/YnJpdGVmaXNoLm5l/dC93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OS8wNi9sb2dvLWph/dmFzY3JpcHQtMi5w/bmc",
          Link: "https://www.javascript.com/"
        },
      ]
    }),
    new Skill({
      Name: "SQL",
      Description: "SQL or Structure Query Language is a programming language that is specifically for manipulating data from a MySQL database",
      Icons: [
        {
          Img: 
          "https://imgs.search.brave.com/OJqj0MvCdchdbDCwbvju-sDde9bdJ-iE_znYVVvlbaY/rs:fit:900:900:1/g:ce/aHR0cHM6Ly9saWJy/YXJ5Lmtpc3NjbGlw/YXJ0LmNvbS8yMDE4/MTEyMy9veXEva2lz/c2NsaXBhcnQtc3Fs/LWRiLWNsaXBhcnQt/bWljcm9zb2Z0LWF6/dXJlLXNxbC1kYXRh/YmFzZS1kOGZlODZh/ZmQ3N2VlMTI0Lmpw/Zw",
        },
      ]
    }),
    new Skill({
      Name: "C#",
      Description: "C Sharp is a programming language that is very strict with it's typing, declarations, and functions. That makes it better for servers since it will impose more restrictions on the users data and other items they might try to pass in.",
      Icons: [
        {
          Img: 
          "https://imgs.search.brave.com/whcyY9iy21_T3uG7pNVXFBDOi-j-SY_THV1yRlW8nEE/rs:fit:860:1006:1/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS81MjEt/NTIxOTU4N19jLWxv/Z28tdHJhbnNwYXJl/bnQtYmFja2dyb3Vu/ZC1oZC1wbmctZG93/bmxvYWQucG5n",
        },
      ]
    }),
    new Skill({
      Name: "MVC File Flow Structure",
      Description: "MVC is a file structure that organizes functions into: View - What the user sees, Controller - where the functions that any interactable button or item might activate, Service - where all the business logic for each function lays, AppState - where all the current data lays, Models - where the formats of data lay",
      Icons: []
    }),
    new Skill({
      Name: "Vue",
      Description: "The Vue framework is a front-end framework that makes designing a page and showing data easier and allows for multi-page applications",
      Icons: [
        {
          Img: 
          "https://imgs.search.brave.com/k7hByVHf6JyKnYu6wHao8ziaaAjTVp__eJACWjeHuxI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/ZnJlZWJpZXN1cHBs/eS5jb20vbG9nb3Mv/bGFyZ2UvMngvdnVl/LTktbG9nby1wbmct/dHJhbnNwYXJlbnQu/cG5n",
          Link: "https://vuejs.org/"
        },
      ]
    }),
    new Skill({
      Name: "Node Server",
      Description: "Node is a run-time environment and using a framework, allows you to create a server relatively easily",
      Icons: [
        {
          Img: 
          "https://imgs.search.brave.com/Ser0fUKZE-O1n-hDxu-hzb36N1VXlRrNyP-6vTOGsXU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9sb2dv/cy1kb3dubG9hZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMDkvTm9kZV9s/b2dvX05vZGVKUy5w/bmc",
          Link: "https://nodejs.org/en/"
        },
      ]
    }),
    new Skill({
      Name: "Mongo DB",
      Description: "Mongo DB is a database which handles all of your database and sometimes can be free to use.",
      Icons: [
        {
          Img: 
          "https://imgs.search.brave.com/RLOogrr4GIduQ5XuPgF69CUhjIYOQPYLOl9zdTH_Ebs/rs:fit:900:760:1/g:ce/aHR0cHM6Ly9tcG5n/LnN1YnBuZy5jb20v/MjAxOTAxMTEvdGh6/L2tpc3NwbmctbW9u/Z29kYi1sb2dvLWRh/dGFiYXNlLW5vc3Fs/LXBvc3RncmVzcWwt/aG93LXRvLWNyZWF0/ZS1hbi1vdXRzdGFu/ZGluZy10ZWNoLXN0/YWNrLWNsaWNrdXAt/YmwtNWMzOTFiZGY5/Y2ZmNDguNDczMTEz/NjIxNTQ3MjQ2NTU5/NjQzMS5qcGc",
          Link: "https://www.mongodb.com/"
        },
      ]
    }),
    new Skill({
      Name: "DotNet",
      Description: "DotNet is another type of framework for back-end purposes that uses C#, SQL, and MySQL to create a server",
      Icons: [
        {
          Img: 
          "https://imgs.search.brave.com/XVRcHd9W8t9zqnoA7j_UKpDqm5sZq_B3ZfoKvsAqQJk/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9sb2dv/cy1kb3dubG9hZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTcvMDcvTWljcm9z/b2Z0Xy5ORVRfbG9n/by5wbmc",
          Link: "https://dotnet.microsoft.com/en-us/"
        },
      ]
    }),
    new Skill({
      Name: "MySQL",
      Description: "MySQL is another database which uses the sql language to manage data and create a database",
      Icons: [
        {
          Img: 
          "https://imgs.search.brave.com/lczo_-Rnm6rCCDYQzSkpbN1ij0jvDUYYVtL0xWVSstM/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvbXlzcWwvbXlz/cWxfUE5HMjMucG5n",
          Link: "https://www.mysql.com/"
        },
      ]
    }),
  ]
})
