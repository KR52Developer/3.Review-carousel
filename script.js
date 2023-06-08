// Reviews Array

const reviews = [{
        id: 1,
        name: "Mega Akash",
        job: "Application Developer",
        img: " ./Images/reviewOneImage.jpg ",
        review: " id: 1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis velsaepe tempore! In dignissimos accusantium ab harum consequatur earum exercitationem, architecto repellendus quam tempore cupiditate fuga error, nesciunt ipsum aspernatur."
    },

    {
        id: 2,
        name: "Rithika",
        job: "Movie Actress",
        img: "./Images/reviewTwoImage.jpg",
        review: " id: 2 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis velsaepe tempore! In dignissimos accusantium ab harum consequatur earum exercitationem, architecto repellendus quam tempore cupiditate fuga error, nesciunt ipsum aspernatur."
    },
    {
        id: 3,
        name: "Mary",
        job: "Software Engineer",
        img: "./Images/reviewThreeImage.jpg",
        review: " id: 3 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis velsaepe tempore! In dignissimos accusantium ab harum consequatur earum exercitationem, architecto repellendus quam tempore cupiditate fuga error, nesciunt ipsum aspernatur."
    },
    {
        id: 4,
        name: "Linda",
        job: " Mobile Application Developer",
        img: "./Images/reviewFourImage.jpg",
        review: " id: 4 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis velsaepe tempore! In dignissimos accusantium ab harum consequatur earum exercitationem, architecto repellendus quam tempore cupiditate fuga error, nesciunt ipsum aspernatur."
    },
    {
        id: 5,
        name: "Rosaline",
        job: "Web Application Developer",
        img: "./Images/reviewFiveImage.jpg",
        review: " id: 5 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis velsaepe tempore! In dignissimos accusantium ab harum consequatur earum exercitationem, architecto repellendus quam tempore cupiditate fuga error, nesciunt ipsum aspernatur."
    }
];

// Finction To add the review one by one to the Website 

function slider() {
    let slideResult = reviews[count];
    console.log(slideResult);
    clientImage.src = slideResult.img;
    console.log(clientImage);
    reviwerName.textContent = slideResult.name;
    designation.textContent = slideResult.job;
    reviewContent.textContent = slideResult.review;
}

// Selecting the Required Elements

let clientImage = document.querySelector(".clientImage");
let reviwerName = document.querySelector(".reviwerName");
let designation = document.querySelector(".designation");
let reviewContent = document.querySelector(".reviewContent");
let btn1 = document.querySelectorAll(".btn1");
console.log(btn1);


// To Create the to create a Review carousel 

let count = 0;
for (const btnvalue of btn1) {
    btnvalue.addEventListener("click", (e) => {
        let clickedBtn = e.currentTarget.classList;
        console.log(clickedBtn);

        // Next Review

        if (clickedBtn.contains("nextBtn")) {
            count++;
            if (count > reviews.length - 1) {
                count = 0;
            }
        }

        // Previous Review

        if (clickedBtn.contains("previousBtn")) {
            count--;
            if (count < 0) {
                count = reviews.length - 1;
            }
        }

        // Finally the Review displayed according to the  User Selection

        slider();

        // To Generate Random Review 

        if (clickedBtn.contains("randomBtn")) {
            count = Math.floor(Math.random() * 5);
            slider();
        }
    });
};