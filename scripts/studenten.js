let students = [];
let currentIndex = 0;


//elementen
const studentElements = [
    document.querySelector("#student-1"),
    document.querySelector("#student-2"),
    document.querySelector("#student-3"),
    document.querySelector("#student-4"),
    document.querySelector("#student-5")
];

const nextButton = document.querySelector("#next");
const previousButton = document.querySelector("#previous");


//studenten laden
fetch("data/students.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("students.json kon niet worden geladen.");
        }

        return response.json();
    })
    .then(data => {
        students = data;

        updateStudents();
    })
    .catch(error => {
        console.error("Fout bij het laden van de studenten:", error);
    });


//studenten weergeven
function updateStudents() {

    if (students.length === 0) {
        return;
    }

    // Studenten eerst laten verdwijnen
    studentElements.forEach(element => {
        element.classList.add("changing");
    });

    // Wachten tot de fade-out klaar is
    setTimeout(() => {

        studentElements.forEach((element, index) => {

            const studentIndex =
                (currentIndex + index) % students.length;

            const student = students[studentIndex];

            element.innerHTML = `
                <a href="${student.link}">
                    <img
                        src="${student.image}"
                        alt="${student.name}"
                    >
                    <p>${student.name}</p>
                </a>
            `;
        });

        // Nieuwe studenten weer laten verschijnen
        requestAnimationFrame(() => {
            studentElements.forEach(element => {
                element.classList.remove("changing");
            });
        });

    }, 250);
}


//volgende 5
nextButton.addEventListener("click", () => {

    currentIndex =
        (currentIndex + 5) % students.length;

    updateStudents();

});


//vorige 5
previousButton.addEventListener("click", () => {

    currentIndex =
        (currentIndex - 5 + students.length) % students.length;

    updateStudents();

});