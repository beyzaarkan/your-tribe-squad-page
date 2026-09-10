
        const popupOverlay = document.getElementById("popupOverlay");
        const popupTitle = document.getElementById("popupTitle");
        const popupText = document.getElementById("popupText");
        const popupClose = document.getElementById("popupClose");

        const amstelFolders = document.querySelectorAll(
            ".amstel-folder-one, .amstel-folder-two, .amstel-folder-three"
        );

        amstelFolders.forEach((folder) => {
            folder.addEventListener("click", () => {
                popupTitle.textContent = folder.dataset.title;
                popupText.textContent = folder.dataset.text;
                popupOverlay.classList.add("show");
            });
        });

        function closePopup() {
            popupOverlay.classList.remove("show");
        }

        popupClose.addEventListener("click", closePopup);

        popupOverlay.addEventListener("click", (event) => {
            if (event.target === popupOverlay) {
                closePopup();
            }
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                closePopup();
            }
        });
    
