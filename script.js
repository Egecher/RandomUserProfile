document.getElementById("getUser").addEventListener("click", function() {
    fetch('https://randomuser.me/api')
        .then(response => response.json())
        .then(json => {
            const user = json.results[0];
            const name = `${user.name.first} ${user.name.last}`;
            const image = user.picture.large;
            const location = `${user.location.city}, ${user.location.state}, ${user.location.country}`;
            const dob = new Date(user.dob.date).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' });
            const email = user.email;
            const phone = user.phone;
            const username = user.login.username;

            document.getElementById("username").innerHTML = name;
            document.getElementById("image").src = image;

            document.getElementById("details").innerHTML = `
                <strong>Konum:</strong> ${location}<br>
                <strong>Doğum Tarihi:</strong> ${dob}<br>
                <strong>E-posta:</strong> ${email}<br>
                <strong>Telefon:</strong> ${phone}<br>
                <strong>Kullanıcı Adı:</strong> ${username}
            `;

            document.getElementById("profile-card").style.display = "flex";
        });
});