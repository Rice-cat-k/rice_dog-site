fetch("./content.json")
  .then(res => res.json())
  .then(data => {
    // HERO
    document.getElementById("tagline").textContent = data.tagline;
    document.getElementById("heroTitle").textContent = data.hero.title;
    document.getElementById("heroSubtitle").textContent = data.hero.subtitle;

    document.getElementById("heroPrimary").href = data.links.kakao;
    document.getElementById("kakaoLink").href = data.links.kakao;

    // CHIPS
    const chips = document.getElementById("chips");
    data.chips.forEach(c => {
      const span = document.createElement("span");
      span.className = "chip";
      span.textContent = c;
      chips.appendChild(span);
    });

    // TODAY PICK
    document.getElementById("todayPickTitle").textContent = data.today_pick.title;
    document.getElementById("todayPickDesc").textContent = data.today_pick.desc;
    document.getElementById("todayPickPrice").textContent = data.today_pick.price;

    // ABOUT
    document.getElementById("aboutText").textContent = data.about;

    // MENU
    const menuGrid = document.getElementById("menuGrid");
    data.menu.forEach(m => {
      const div = document.createElement("div");
      div.className = "menu-item";
      div.innerHTML = `
        <div class="menu-name">${m.name}</div>
        <div class="menu-desc">${m.desc}</div>
        <div class="menu-price">${m.price}</div>
      `;
      menuGrid.appendChild(div);
    });

    // GALLERY
    const gallery = document.getElementById("galleryGrid");
    data.gallery.forEach(img => {
      const div = document.createElement("div");
      div.className = "gallery-item";
      div.style.backgroundImage = `url(${img})`;
      gallery.appendChild(div);
    });

    // LOCATION
    document.getElementById("addressText").textContent = data.location.address;
    document.getElementById("addressLine").textContent = data.location.address;
    document.getElementById("hoursLine").textContent = data.location.hours;
    document.getElementById("phoneLine").textContent = data.location.phone;
    document.getElementById("naverMapLink").href = data.location.naver_map;
    document.getElementById("instaLink").href = data.links.instagram;
    document.getElementById("mapEmbed").src = data.location.map_embed;
  });
