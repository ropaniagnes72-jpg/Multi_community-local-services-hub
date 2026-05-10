/*KAMPALA SERVICE DIRECTORY - MY FULL SCRIPT */

const data = {
  education: [
    { name: "Makerere University", location: "Kampala", rating: 5, img: "images/Muk.jpeg", desc: "Research Excellence",
      details: "Makerere offers undergraduate, postgraduate, and doctoral programs across faculties including Medicine, Engineering, Law, and Social Sciences. It is Uganda's oldest and most prestigious university.",
      reviews: ["Best university in East Africa!", "Great research environment.", "Excellent lecturers and facilities."] },
    { name: "Kyambogo University", location: "Kampala", rating: 4, img: "images/Kyambogo.jpeg", desc: "Technical Training",
      details: "Kyambogo University specializes in technical, vocational, and education training. It offers programs in Engineering, Education, and Special Needs.",
      reviews: ["Good technical programs.", "Friendly campus environment.", "Strong vocational training."] },
    { name: "UCU Mukono", location: "Mukono", rating: 5, img: "images/ucu.jpeg", desc: "Holistic Education",
      details: "Uganda Christian University provides quality education rooted in Christian values. Programs span Business, Law, Education, and Health Sciences.",
      reviews: ["Wonderful Christian atmosphere.", "Quality education standards.", "Beautiful campus."] },
    { name: "Victoria University", location: "Kampala", rating: 5, img: "images/victoria.jpg", desc: "Modern Campus",
      details: "Victoria University is a modern private university offering programs in Business, IT, Law, and Social Sciences with state-of-the-art facilities.",
      reviews: ["Modern facilities and great staff.", "Very supportive administration.", "Excellent IT programs."] },
    { name: "Cavendish University", location: "Kampala", rating: 4, img: "images/cuuug.png", desc: "Flexible Learning",
      details: "Cavendish University Uganda offers flexible learning options including evening and weekend classes in Business, IT, and Law.",
      reviews: ["Great for working professionals.", "Flexible timetable.", "Good learning environment."] },
    { name: "Mbarara University", location: "Mbarara", rating: 5, img: "images/mbarara.jpeg", desc: "Science & Tech",
      details: "Mbarara University of Science and Technology (MUST) is renowned for Medicine, Pharmacy, and Science programs with strong community outreach.",
      reviews: ["Top medical school in Uganda.", "Great science programs.", "Dedicated lecturers."] }
  ],
  restaurants: [
    { name: "Cafe Javas", location: "Kampala", rating: 5, img: "images/cafe java.jpeg", desc: "Premium Coffee & Meals",
      details: "Cafe Javas offers a wide menu of breakfasts, lunches, dinners, and premium coffees. Multiple branches across Kampala with a warm, relaxed ambiance.",
      reviews: ["Best coffee in Kampala!", "Great food and service.", "Love the cozy atmosphere."] },
    { name: "2K Restaurant", location: "Bakuli", rating: 5, img: "images/2k restaurant.jpg", desc: "Traditional Luwombo",
      details: "2K Restaurant serves authentic Ugandan cuisine including Luwombo, Matoke, and Rolex. A favourite for locals seeking home-cooked flavours.",
      reviews: ["Amazing traditional food!", "Very affordable prices.", "Best Luwombo in town."] },
    { name: "The Bistro", location: "Kololo", rating: 4, img: "images/bistro.jpeg", desc: "Continental Cuisine",
      details: "The Bistro in Kololo offers continental and international cuisine in an upscale setting. Perfect for business lunches and evening dinners.",
      reviews: ["Elegant dining experience.", "Delicious continental dishes.", "Great wine selection."] },
    { name: "KFC Uganda", location: "Kampala", rating: 4, img: "images/kfc.jpeg", desc: "Quick Service Chicken",
      details: "KFC Uganda serves the classic Kentucky Fried Chicken menu including burgers, wraps, fries, and family buckets. Fast service across multiple city locations.",
      reviews: ["Crispy chicken as always!", "Fast service.", "Great for families."] },
    { name: "Piato Restaurant", location: "Kampala", rating: 5, img: "images/piato.jpeg", desc: "Grill & Pasta",
      details: "Piato Restaurant is known for its wood-fired grills, fresh pasta, and diverse menu catering to both local and international tastes.",
      reviews: ["Best grilled meat in Kampala!", "Fantastic pasta dishes.", "Great ambiance and service."] },
    { name: "Shaka Zulu", location: "Bugolobi", rating: 4, img: "images/shaka zulu.jpeg", desc: "Authentic Buffet",
      details: "Shaka Zulu offers an authentic African buffet experience with a wide spread of grilled meats, salads, and traditional sides in a vibrant setting.",
      reviews: ["Great buffet variety.", "African themed decor is amazing.", "Good value for money."] }
  ],
  supermarket: [
    { name: "Capital Shoppers", location: "Ntinda", rating: 5, img: "images/capital shopper.jpeg", desc: "Local Retail Giant",
      details: "Capital Shoppers is one of Uganda's largest supermarket chains offering groceries, electronics, clothing, and household goods at competitive prices.",
      reviews: ["Always well stocked.", "Friendly staff.", "Great prices for locals."] },
    { name: "Carrefour", location: "Oasis Mall", rating: 5, img: "images/carrerfour.jpeg", desc: "Global Selection",
      details: "Carrefour at Oasis Mall brings a global retail experience with imported goods, fresh produce, electronics, and a wide range of international brands.",
      reviews: ["Love the international products!", "Very clean and organized.", "Best supermarket in Kampala."] },
    { name: "Quality Supermarket", location: "Lubowa", rating: 4, img: "images/quality supermarket.jpg", desc: "Family Grocery Hub",
      details: "Quality Supermarket provides fresh produce, dairy, meat, and household essentials in a family-friendly shopping environment in Lubowa.",
      reviews: ["Great fresh produce.", "Convenient location.", "Friendly and helpful staff."] },
    { name: "Mega Standard", location: "Downtown", rating: 5, img: "images/mega std.jpeg", desc: "Variety & Value",
      details: "Mega Standard Supermarket in downtown Kampala offers a massive variety of goods at affordable prices, popular with both individuals and traders.",
      reviews: ["Best prices in town!", "Huge variety of products.", "Very busy but worth it."] },
    { name: "Kenjoy Supermarket", location: "Bukoto", rating: 4, img: "images/kenyoy supermarket.jpg", desc: "Reliable Community Shop",
      details: "Kenjoy Supermarket serves the Bukoto community with everyday groceries, fresh bakery items, and household products at fair prices.",
      reviews: ["Convenient neighbourhood shop.", "Good fresh bakery section.", "Reliable stock levels."] },
    { name: "Tuskys", location: "Kampala", rating: 4, img: "images/tuskys.jpeg", desc: "Fresh & Affordable",
      details: "Tuskys Uganda offers fresh fruits, vegetables, meats, and packaged goods. Known for daily fresh deliveries and affordable pricing.",
      reviews: ["Very fresh produce.", "Affordable everyday shopping.", "Clean and well-arranged."] }
  ],
  hospitals: [
    { name: "Mulago Hospital", location: "Kampala", rating: 4, img: "images/mulago.jpg", desc: "National Referral",
      details: "Mulago National Referral Hospital is Uganda's largest public hospital providing specialized medical care, surgery, maternity, and emergency services.",
      reviews: ["Large and well-equipped.", "Dedicated medical staff.", "Important national facility."] },
    { name: "Nakasero Hospital", location: "Kampala", rating: 5, img: "images/Nakasero.jpeg", desc: "Private Specialty",
      details: "Nakasero Hospital is a leading private hospital offering specialist consultations, diagnostics, surgery, maternity, and ICU services to high standards.",
      reviews: ["Excellent private healthcare.", "Very clean and professional.", "Fast and efficient service."] },
    { name: "Case Hospital", location: "Kampala", rating: 5, img: "images/case hospital.jpeg", desc: "Advanced Medical Care",
      details: "Case Hospital provides advanced medical care including cardiology, oncology, orthopaedics, and emergency services with modern equipment.",
      reviews: ["Top-tier medical care.", "Very professional doctors.", "Modern and well-equipped."] },
    { name: "IHK", location: "Namuwongo", rating: 5, img: "images/international hospital.jpeg", desc: "International Standards",
      details: "International Hospital Kampala (IHK) offers internationally accredited medical services including diagnostics, specialist care, surgery, and wellness.",
      reviews: ["International quality care.", "Great specialist doctors.", "Very efficient processes."] },
    { name: "Rubaga Hospital", location: "Rubaga", rating: 4, img: "images/Lubaga-hospital.png", desc: "Faith-Based Care",
      details: "Rubaga Hospital is a Catholic-founded institution providing compassionate general medical care, maternity services, and outpatient clinics.",
      reviews: ["Compassionate and caring staff.", "Affordable services.", "Good maternity ward."] },
    { name: "Nsambya Hospital", location: "Nsambya", rating: 4, img: "images/mother kevin.jpeg", desc: "Trusted General Care",
      details: "Nsambya Hospital provides trusted general medical care, surgery, pediatrics, and maternity services with a long history of community healthcare.",
      reviews: ["Trusted hospital for years.", "Good general care.", "Helpful nursing staff."] }
  ],
  businesses: [
    { name: "MTN Uganda", location: "Kampala", rating: 5, img: "images/mtn.jpeg", desc: "Telecommunications",
      details: "MTN Uganda is the country's leading telecom provider offering mobile voice, data, MoMo mobile money, and enterprise solutions nationwide.",
      reviews: ["Best network coverage.", "MoMo is very convenient.", "Great data packages."] },
    { name: "Airtel Uganda", location: "Kampala", rating: 5, img: "images/Airtel.jpg", desc: "Mobile Services",
      details: "Airtel Uganda provides affordable mobile voice, internet, and Airtel Money services with wide coverage across Uganda.",
      reviews: ["Affordable call rates.", "Good data bundles.", "Airtel Money works great."] },
    { name: "UDB", location: "Kampala", rating: 4, img: "images/UDB.jpeg", desc: "Development Finance",
      details: "Uganda Development Bank (UDB) provides long-term development financing to businesses in agriculture, manufacturing, and infrastructure sectors.",
      reviews: ["Great support for businesses.", "Supportive loan officers.", "Important institution for Uganda."] },
    { name: "Roofings Group", location: "Lubowa", rating: 5, img: "images/Roofings.jpeg", desc: "Steel & Construction",
      details: "Roofings Group is Uganda's largest steel manufacturer producing roofing sheets, iron bars, wire, and pipes for construction across East Africa.",
      reviews: ["Best quality steel products.", "Reliable supply chain.", "Top construction brand."] },
    { name: "Mukwano Group", location: "Kampala", rating: 4, img: "images/mukwano.jpeg", desc: "Consumer Goods",
      details: "Mukwano Group manufactures and distributes consumer goods including cooking oil, soap, plastics, and beverages across Uganda and the region.",
      reviews: ["Trusted Ugandan brand.", "Quality consumer products.", "Good distribution network."] },
    { name: "Speke Resort", location: "Munyonyo", rating: 5, img: "images/speke.jpeg", desc: "Tourism & Events",
      details: "Speke Resort Munyonyo is Uganda's premier resort and conference centre offering luxury accommodation, dining, and event hosting on Lake Victoria shores.",
      reviews: ["Stunning lakeside views.", "World-class conference facilities.", "Excellent hospitality."] }
  ],
  pharmacy: [
    { name: "First Pharmacy", location: "Wandegeya", rating: 5, img: "images/first pharmacy.jpeg", desc: "24-Hour Service",
      details: "First Pharmacy in Wandegeya operates 24 hours a day, 7 days a week, offering prescription medicines, OTC drugs, and health consultations.",
      reviews: ["Open all night, very convenient.", "Knowledgeable pharmacists.", "Wide range of medicines."] },
    { name: "Rocket Health", location: "Kampala", rating: 5, img: "images/rocket-health.jpg", desc: "Digital Health Hub",
      details: "Rocket Health is a digital health platform offering telemedicine consultations, medicine delivery, and lab testing services across Kampala.",
      reviews: ["Revolutionary health service!", "Medicine delivered to my door.", "Great telemedicine experience."] },
    { name: "Vine Pharmacy", location: "Kampala", rating: 4, img: "images/vine pharmacy.jpeg", desc: "Trusted Medicine",
      details: "Vine Pharmacy provides quality prescription and over-the-counter medicines with professional pharmaceutical guidance and health advice.",
      reviews: ["Trusted local pharmacy.", "Helpful staff.", "Good stock of medicines."] },
    { name: "Guardian Health", location: "Various", rating: 4, img: "images/Guardian pharmacy.jpeg", desc: "Wellness Experts",
      details: "Guardian Health pharmacies across Kampala offer wellness products, vitamins, prescription drugs, and health screening services.",
      reviews: ["Great wellness products.", "Multiple convenient locations.", "Professional and friendly."] },
    { name: "Abacus Pharmacy", location: "Kampala", rating: 5, img: "images/Abacus-pharmacy.jpg", desc: "Professional Pharma",
      details: "Abacus Pharmacy is a professional pharmaceutical provider offering a comprehensive range of medicines, diagnostics, and patient counselling.",
      reviews: ["Very professional service.", "Excellent pharmaceutical advice.", "Well-stocked pharmacy."] },
    { name: "Life Care", location: "Kampala", rating: 4, img: "images/life care.jpeg", desc: "Community Health",
      details: "Life Care Pharmacy focuses on community health, offering affordable medicines, family planning products, and basic health consultations.",
      reviews: ["Affordable community pharmacy.", "Great for everyday health needs.", "Caring and friendly staff."] }
  ],
  banks: [
    { name: "Stanbic Bank", location: "Kampala", rating: 5, img: "images/stanbic bank.jpeg", desc: "Top Commercial Bank",
      details: "Stanbic Bank Uganda is the country's largest bank by assets, offering personal banking, business accounts, loans, trade finance, and investment services.",
      reviews: ["Best bank in Uganda.", "Excellent customer service.", "Wide branch network."] },
    { name: "Centenary Bank", location: "Kampala", rating: 5, img: "images/centenary bank.jpeg", desc: "Agricultural Finance",
      details: "Centenary Bank is Uganda's leading microfinance and agricultural bank, offering savings, loans, and mobile banking to farmers and small businesses.",
      reviews: ["Great support for farmers.", "Accessible even in rural areas.", "Good loan products."] },
    { name: "Absa Bank", location: "Kampala", rating: 4, img: "images/absa bank.jpeg", desc: "Corporate Banking",
      details: "Absa Bank Uganda provides corporate and personal banking services including trade finance, mortgages, credit cards, and digital banking.",
      reviews: ["Good corporate banking.", "Professional service.", "Easy digital banking app."] },
    { name: "Standard Chartered", location: "Kampala", rating: 5, img: "images/standard charted.jpg", desc: "International Banking",
      details: "Standard Chartered Bank Uganda offers international banking services including forex, wealth management, corporate finance, and premium personal banking.",
      reviews: ["Great for international transactions.", "Premium banking experience.", "Excellent forex services."] },
    { name: "DFCU Bank", location: "Kampala", rating: 4, img: "images/dfcu bank.jpeg", desc: "Growth Banking",
      details: "DFCU Bank supports business growth with SME loans, asset financing, mortgage products, and digital banking solutions tailored for Ugandan entrepreneurs.",
      reviews: ["Very supportive of businesses.", "Good SME loan products.", "Helpful relationship managers."] },
    { name: "Equity Bank", location: "Kampala", rating: 4, img: "images/equity bank.jpeg", desc: "Inclusive Finance",
      details: "Equity Bank Uganda champions financial inclusion with accessible savings accounts, affordable loans, and mobile banking for all income levels.",
      reviews: ["Banking for everyone.", "Very accessible services.", "Good mobile banking platform."] }
  ],
  others: [
    { name: "Sparkles Salon", location: "Acacia", rating: 5, img: "images/sparkless saloon.jpeg", desc: "Luxury Grooming",
      details: "Sparkles Salon at Acacia Mall offers luxury hair, nail, and beauty services using premium products in an elegant and relaxing environment.",
      reviews: ["Amazing hair services!", "Very luxurious experience.", "Best salon in Kampala."] },
    { name: "Hardware World", location: "Ntinda", rating: 5, img: "images/hardware world.jpeg", desc: "Building Materials",
      details: "Hardware World in Ntinda stocks a comprehensive range of building materials, tools, paints, and electrical supplies for construction and renovation projects.",
      reviews: ["Best hardware store around.", "Great variety of products.", "Knowledgeable and helpful staff."] },
    { name: "BBROOD Bakery", location: "Kampala", rating: 5, img: "images/Brood barkery.jpeg", desc: "Artisan Bread",
      details: "BBROOD Bakery crafts artisan breads, pastries, and cakes using traditional European baking methods with locally sourced ingredients.",
      reviews: ["Best bread in Kampala!", "Love the artisan pastries.", "Freshly baked every morning."] },
    { name: "Hot Loaf Bakery", location: "Kampala", rating: 4, img: "images/hot loaf.jPG", desc: "Fresh Daily Bakes",
      details: "Hot Loaf Bakery delivers fresh breads, buns, cakes, and pastries daily to homes and businesses across Kampala with reliable quality.",
      reviews: ["Fresh bakes every day.", "Affordable and tasty.", "Great birthday cakes."] },
    { name: "Mart Barber", location: "Kampala", rating: 4, img: "images/mert barber.jpeg", desc: "Classic Barbering",
      details: "Mart Barber offers classic and modern barbering services including cuts, shaves, beard trims, and hair treatments in a relaxed, stylish setting.",
      reviews: ["Great haircuts every time.", "Skilled and friendly barbers.", "Clean and comfortable shop."] },
    { name: "Cakes & Bakes", location: "Kampala", rating: 5, img: "images/cake $ bread.jpeg", desc: "Pastry Experts",
      details: "Cakes & Bakes specializes in custom celebration cakes, wedding cakes, cupcakes, and a full range of freshly baked pastries for all occasions.",
      reviews: ["Stunning custom cakes!", "Delicious wedding cake.", "Best pastry shop in Kampala."] }
  ]
};

/* == NAVIGATION HELPER == */
function getDirections(name, location) {
  const query = encodeURIComponent(`${name} ${location} Uganda`);
  const url = `https://www.google.com/maps/search/?api=1&query=${query}`;
  window.open(url, '_blank');
}

/* == RENDER CARDS == */
function renderCards(items) {
  const content = document.getElementById("content");
  content.innerHTML = "";

  if (!items || items.length === 0) {
    content.innerHTML = '<div class="no-results"><i class="fas fa-search" style="font-size:32px;margin-bottom:12px;display:block;color:#d1d5db"></i>No results found. Try a different search.</div>';
    return;
  }

  items.forEach(item => {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
      stars += i <= item.rating
        ? '<i class="fas fa-star"></i>'
        : '<i class="fas fa-star star-empty"></i>';
    }

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/300x160/e8f5ed/1a7c3e?text=${encodeURIComponent(item.name)}'">
      <div class="card-body">
        <h3>${item.name}</h3>
        <p class="card-desc">${item.desc}</p>
        <p class="card-location"><i class="fas fa-map-marker-alt"></i> ${item.location}</p>
        <div class="card-stars">${stars}</div>
        <button class="card-btn" onclick="showDetails('${item.name.replace(/'/g, "\\'")}')">View Details</button>
      </div>
    `;
    content.appendChild(card);
  });
}

/* ===== FILTER BY CATEGORY ===== */
function filterCategory(category, btn) {
  document.querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
  if (btn) btn.classList.add("active");

  if (category === "All") {
    let all = [];
    for (let key in data) all = all.concat(data[key]);
    renderCards(all);
  } else {
    renderCards(data[category] || []);
  }
}

/* ===== TOP RATED ===== */
function filterTopRated(btn) {
  document.querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
  if (btn) btn.classList.add("active");
  let top = [];
  for (let key in data) top = top.concat(data[key].filter(i => i.rating >= 5));
  renderCards(top);
}

/* ===== SEARCH ===== */
function liveSearch() {
  const val = document.getElementById("search").value.toLowerCase().trim();
  if (!val) {
    filterCategory("All", null);
    return;
  }
  let results = [];
  for (let key in data) {
    results = results.concat(data[key].filter(item =>
      item.name.toLowerCase().includes(val) ||
      item.desc.toLowerCase().includes(val) ||
      item.location.toLowerCase().includes(val) ||
      item.details.toLowerCase().includes(val)
    ));
  }
  renderCards(results);
}

/* ===== MODAL ===== */
function showDetails(itemName) {
  let item = null;
  for (let key in data) {
    item = data[key].find(i => i.name === itemName);
    if (item) break;
  }
  if (!item) return;

  let stars = "";
  for (let i = 0; i < 5; i++) {
    stars += i < item.rating ? '<i class="fas fa-star"></i>' : '<i class="fas fa-star star-empty"></i>';
  }
  const reviewsHTML = item.reviews.map(r => `<li>"${r}"</li>`).join("");

  const escapedName = item.name.replace(/'/g, "\\'");
  const escapedLoc = item.location.replace(/'/g, "\\'");

  document.getElementById("modal-body").innerHTML = `
    <img src="${item.img}" alt="${item.name}" style="width:100%;border-radius:10px;height:200px;object-fit:cover;background:#e8f5ed;" onerror="this.src='https://via.placeholder.com/520x200/e8f5ed/1a7c3e?text=${encodeURIComponent(item.name)}'">
    <h2>${item.name}</h2>
    <div class="modal-stars">${stars}</div>
    <p class="modal-location"><strong>📍 Location:</strong> ${item.location}</p>
    <p class="modal-desc"><strong>About:</strong> ${item.desc}</p>
    <hr>
    <h3>Services Provided</h3>
    <p style="font-size:14px;color:#6b7280">${item.details}</p>
    <hr>
    <h3>User Reviews</h3>
    <ul class="reviews-list">${reviewsHTML}</ul>
    <div class="modal-actions">
      <button class="btn-action" onclick="getDirections('${escapedName}', '${escapedLoc}')">
        <i class="fas fa-directions"></i> Get Directions
      </button>
      <button class="btn-action primary" onclick="contactService('${escapedName}')">
        <i class="fas fa-phone"></i> Contact
      </button>
    </div>
  `;
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function contactService(name) {
  alert(`Thank you for your interest in ${name}!\nPlease visit their location directly or call for more information.`);
}

window.onclick = function(e) {
  if (e.target === document.getElementById("modal")) closeModal();
};

/* ==SMOOTH SCROLL === */
function scrollToServices() {
  const target = document.getElementById("services");
  if (target) target.scrollIntoView({ behavior: "smooth" });
}

/* == HAMBURGER ==*/
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  if (menu) menu.classList.toggle("open");
}

/* ===== INIT ===== */
window.onload = function() {
  let all = [];
  for (let key in data) all = all.concat(data[key]);
  renderCards(all);
};

function openDashboard() {
  const content = document.getElementById("content");
  const categorySection = document.querySelector(".category-section");
  const hero = document.querySelector(".hero");
  const dashboard = document.getElementById("dashboard");

  if (content) content.style.display = "none";
  if (categorySection) categorySection.style.display = "none";
  if (hero) hero.style.display = "none";
  if (dashboard) dashboard.style.display = "block";
}
