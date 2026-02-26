const userContainer = document.getElementById("userContainer");
const reloadBtn = document.getElementById("reloadBtn");

function fetchUsers() {
    userContainer.innerHTML = "Loading...";

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
            userContainer.innerHTML = ""; // clear loading text

            users.forEach(user => {
                const div = document.createElement("div");
                div.classList.add("user-card");

                div.innerHTML = `
                    <h3>${user.name}</h3>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Address:</strong> ${user.address.street}, 
                       ${user.address.city}</p>
                `;

                userContainer.appendChild(div);
            });
        })
        .catch(error => {
            userContainer.innerHTML = `<p style="color:red;">Failed to load data</p>`;
            console.error("Error fetching:", error);
        });
}

// Load when page starts
fetchUsers();

// Reload button
reloadBtn.addEventListener("click", fetchUsers);