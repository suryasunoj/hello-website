// Apex Motors - Pre-Owned Car Showroom Engine
const CARS_DATA = [
  {
    id: 1,
    name: "Toyota Fortuner",
    variant: "2.8 4x4 AT Legender Edition",
    year: 2022,
    km: 24000,
    price: 3850000,
    priceDisplay: "₹38.50 Lakh",
    emi: "₹76,000/mo",
    fuel: "Diesel",
    transmission: "Automatic",
    bodyType: "SUV",
    owners: "1st Owner",
    badge: "Certified 4x4 SUV",
    // Exact Toyota Fortuner Legender
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Toyota_Fortuner_Legender_2.8_4WD_%28Thailand%29_front_view.jpg/800px-2021_Toyota_Fortuner_Legender_2.8_4WD_%28Thailand%29_front_view.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1594502184342-2e12f877aa73?auto=format&fit=crop&w=800&q=80",
    description: "The undisputed king of full-size SUVs. Legender dual-tone front bumper and grille, bi-LED projector headlights, ventilated leather seats, 11-speaker JBL audio, and complete Toyota authorized service records."
  },
  {
    id: 2,
    name: "Land Rover Defender 110",
    variant: "2.0 HSE Luxury 4WD",
    year: 2022,
    km: 19500,
    price: 8600000,
    priceDisplay: "₹86.00 Lakh",
    emi: "₹1,65,000/mo",
    fuel: "Petrol",
    transmission: "Automatic",
    bodyType: "SUV",
    owners: "1st Owner",
    badge: "Iconic Off-Roader",
    // Exact Land Rover Defender 110
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/2020_Land_Rover_Defender_110_First_Edition_2.0_Front.jpg/800px-2020_Land_Rover_Defender_110_First_Edition_2.0_Front.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=800&q=80",
    description: "Unstoppable adventure meets bespoke luxury. Electronic air suspension, 3D surround camera, Pivi Pro touchscreen navigation, ClearSight rearview mirror, and spotless single-owner history."
  },
  {
    id: 3,
    name: "BMW M5 Competition",
    variant: "4.4L Twin-Turbo V8 xDrive (617 HP)",
    year: 2022,
    km: 16000,
    price: 11500000,
    priceDisplay: "₹1.15 Crore",
    emi: "₹2,25,000/mo",
    fuel: "Petrol",
    transmission: "Automatic",
    bodyType: "Luxury",
    owners: "1st Owner",
    badge: "Super Sedan",
    // Exact BMW M5 Competition in Marina Bay Blue
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/2019_BMW_M5_Competition_Automatic_4.4.jpg/800px-2019_BMW_M5_Competition_Automatic_4.4.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=800&q=80",
    description: "The ultimate track-ready super sedan. 0-100 km/h in 3.3 seconds, M xDrive switchable 2WD drift mode, carbon fiber roof, active M sports exhaust, and Bowers & Wilkins diamond surround audio."
  },
  {
    id: 4,
    name: "BMW 7 Series",
    variant: "740Li M Sport Executive Luxury",
    year: 2021,
    km: 22000,
    price: 8800000,
    priceDisplay: "₹88.00 Lakh",
    emi: "₹1,69,000/mo",
    fuel: "Petrol",
    transmission: "Automatic",
    bodyType: "Luxury",
    owners: "1st Owner",
    badge: "Flagship Luxury",
    // Exact BMW 7 Series 740Li M Sport
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/2019_BMW_740Li_M_Sport_Automatic_3.0_Front.jpg/800px-2019_BMW_740Li_M_Sport_Automatic_3.0_Front.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=800&q=80",
    description: "Presidential comfort and prestige. Rear executive lounge with massage seating, rear entertainment screens, Sky Lounge panoramic glass roof, active air suspension, and gesture control."
  },
  {
    id: 5,
    name: "Range Rover Sport",
    variant: "3.0 HSE Dynamic Luxury 4WD",
    year: 2021,
    km: 29000,
    price: 7200000,
    priceDisplay: "₹72.00 Lakh",
    emi: "₹1,40,000/mo",
    fuel: "Diesel",
    transmission: "Automatic",
    bodyType: "SUV",
    owners: "1st Owner",
    badge: "Ultra Luxury SUV",
    // Exact Land Rover Range Rover Sport HSE Dynamic
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/2018_Land_Rover_Range_Rover_Sport_HSE_Dynamic_V6_Supercharged_3.0_Front.jpg/800px-2018_Land_Rover_Range_Rover_Sport_HSE_Dynamic_V6_Supercharged_3.0_Front.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=800&q=80",
    description: "Commanding road presence with adaptive dynamics, Brembo performance brakes, sliding panoramic roof, heated cooling Windsor leather seats, and 825W Meridian audio."
  },
  {
    id: 6,
    name: "Honda Civic",
    variant: "ZX 1.8 i-VTEC CVT Sedan",
    year: 2020,
    km: 41000,
    price: 1580000,
    priceDisplay: "₹15.80 Lakh",
    emi: "₹31,000/mo",
    fuel: "Petrol",
    transmission: "Automatic",
    bodyType: "Sedan",
    owners: "2nd Owner",
    badge: "Verified Sedan",
    // Exact Honda Civic Sedan
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/2022_Honda_Civic_LX_Sedan%2C_front_right%2C_10-23-2022.jpg/800px-2022_Honda_Civic_LX_Sedan%2C_front_right%2C_10-23-2022.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=80",
    description: "Sleek aerodynamic fastback styling, LaneWatch blind-spot camera, electric sunroof, dual-zone climate control, and renowned bulletproof Honda i-VTEC reliability."
  },
  {
    id: 7,
    name: "BMW 3 Series",
    variant: "330i M Sport Edition",
    year: 2021,
    km: 28500,
    price: 3450000,
    priceDisplay: "₹34.50 Lakh",
    emi: "₹68,500/mo",
    fuel: "Petrol",
    transmission: "Automatic",
    bodyType: "Sedan",
    owners: "1st Owner",
    badge: "Certified Pre-Owned",
    // Exact BMW 330i M Sport
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/2019_BMW_330i_M_Sport_Automatic_2.0_Front.jpg/800px-2019_BMW_330i_M_Sport_Automatic_2.0_Front.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
    description: "Immaculate condition with complete BMW authorized service history. Sunroof, ambient lighting, M-Sport steering, and Harman Kardon sound system."
  },
  {
    id: 8,
    name: "Mercedes-Benz C-Class",
    variant: "C 220d AMG Line Premium",
    year: 2020,
    km: 36000,
    price: 3890000,
    priceDisplay: "₹38.90 Lakh",
    emi: "₹76,200/mo",
    fuel: "Diesel",
    transmission: "Automatic",
    bodyType: "Sedan",
    owners: "1st Owner",
    badge: "Single Owner",
    // Exact Mercedes-Benz C-Class AMG Line
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/2018_Mercedes-Benz_C200_AMG_Line_Premium%2B_2.0_Front.jpg/800px-2018_Mercedes-Benz_C200_AMG_Line_Premium%2B_2.0_Front.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80",
    description: "Pristine luxury sedan with plush Artico leather, panoramic sunroof, digital cockpit, AMG body styling, and 1-year comprehensive warranty."
  },
  {
    id: 9,
    name: "Audi A6",
    variant: "45 TFSI Technology",
    year: 2021,
    km: 31200,
    price: 4200000,
    priceDisplay: "₹42.00 Lakh",
    emi: "₹82,500/mo",
    fuel: "Petrol",
    transmission: "Automatic",
    bodyType: "Luxury",
    owners: "1st Owner",
    badge: "Executive Sedan",
    // Exact Audi A6
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/2019_Audi_A6_Sport_40_TDi_S-Tronic_2.0_Front.jpg/800px-2019_Audi_A6_Sport_40_TDi_S-Tronic_2.0_Front.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&w=800&q=80",
    description: "Flagship luxury with Matrix LED headlights, dual touchscreens with MMI touch response, Bang & Olufsen 3D audio, and 150-point technical certification."
  },
  {
    id: 10,
    name: "Tesla Model 3",
    variant: "Long Range Dual Motor AWD",
    year: 2022,
    km: 19800,
    price: 4600000,
    priceDisplay: "₹46.00 Lakh",
    emi: "₹89,000/mo",
    fuel: "Electric",
    transmission: "Automatic",
    bodyType: "Electric",
    owners: "1st Owner",
    badge: "Zero Emission",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&w=800&q=80",
    description: "Instant torque, Autopilot enabled, 500+ km real-world battery range per charge, all-glass acoustic roof, and premium 14-speaker audio system."
  },
  {
    id: 11,
    name: "Porsche 911 Carrera S",
    variant: "3.0 Twin-Turbo PDK Sports Coupe",
    year: 2020,
    km: 18000,
    price: 8900000,
    priceDisplay: "₹89.00 Lakh",
    emi: "₹1,72,000/mo",
    fuel: "Petrol",
    transmission: "Automatic",
    bodyType: "Luxury",
    owners: "1st Owner",
    badge: "Iconic Sports Car",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80",
    description: "Pure driving adrenaline wrapped in everyday comfort. Sport Chrono package, 20-inch RS Spyder wheels, PASM sports suspension, and active sports exhaust."
  }
];

// State
let activeCategory = "all";
let searchQuery = "";
let sortBy = "featured";
let wishlist = JSON.parse(localStorage.getItem("apex_wishlist")) || [];

// DOM Elements
const carsContainer = document.getElementById("cars-container");
const noCarsMsg = document.getElementById("no-cars-msg");
const searchInput = document.getElementById("car-search-input");
const heroSearchBtn = document.getElementById("hero-search-btn");
const heroTypeFilter = document.getElementById("hero-type-filter");
const filterTabs = document.querySelectorAll(".filter-tab");
const sortSelect = document.getElementById("sort-select");
const resetFiltersBtn = document.getElementById("reset-filters-btn");
const wishlistCountEl = document.getElementById("wishlist-count");
const wishlistBtn = document.getElementById("wishlist-btn");

// Modals
const authModal = document.getElementById("auth-modal");
const openLoginBtn = document.getElementById("open-login-btn");
const closeAuthModal = document.getElementById("close-auth-modal");
const tabLogin = document.getElementById("tab-login");
const tabRegister = document.getElementById("tab-register");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const authButtons = document.getElementById("auth-buttons");
const userProfile = document.getElementById("user-profile");
const userDisplayName = document.getElementById("user-display-name");
const logoutBtn = document.getElementById("logout-btn");

// Car Detail Modal
const carModal = document.getElementById("car-modal");
const closeCarModal = document.getElementById("close-car-modal");
const carModalContent = document.getElementById("car-modal-content");
const toast = document.getElementById("toast");

// Render Cars
function renderCars() {
  let filtered = CARS_DATA.filter(car => {
    const matchesCategory = activeCategory === "all" || car.bodyType === activeCategory;
    const matchesSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          car.variant.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          car.fuel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort
  if (sortBy === "price-low") filtered.sort((a, b) => a.price - b.price);
  else if (sortBy === "price-high") filtered.sort((a, b) => b.price - a.price);
  else if (sortBy === "year-new") filtered.sort((a, b) => b.year - a.year);
  else if (sortBy === "km-low") filtered.sort((a, b) => a.km - b.km);

  carsContainer.innerHTML = "";

  if (filtered.length === 0) {
    noCarsMsg.style.display = "block";
    return;
  }

  noCarsMsg.style.display = "none";

  filtered.forEach(car => {
    const isLiked = wishlist.includes(car.id);
    const card = document.createElement("div");
    card.className = "car-card";
    card.innerHTML = `
      <div class="car-img-wrapper">
        <span class="car-badge">${car.badge}</span>
        <button class="like-btn ${isLiked ? 'liked' : ''}" data-id="${car.id}" title="Save to favorites">
          <i class="${isLiked ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
        </button>
        <img src="${car.image}" alt="${car.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${car.fallbackImage}';" />
      </div>

      <div class="car-body">
        <div class="car-title-row">
          <h3>${car.name}</h3>
          <span class="car-year-badge">${car.year} Model</span>
        </div>
        <p class="car-variant">${car.variant} • ${car.owners}</p>

        <!-- Detailed Metrics -->
        <div class="car-specs-grid">
          <div class="spec-box">
            <i class="fa-solid fa-gauge"></i>
            <div class="spec-info">
              <span class="spec-title">Kilometers</span>
              <span class="spec-val">${car.km.toLocaleString()} km</span>
            </div>
          </div>
          <div class="spec-box">
            <i class="fa-solid fa-calendar-days"></i>
            <div class="spec-info">
              <span class="spec-title">Mfg. Year</span>
              <span class="spec-val">${car.year}</span>
            </div>
          </div>
          <div class="spec-box">
            <i class="fa-solid fa-gas-pump"></i>
            <div class="spec-info">
              <span class="spec-title">Fuel Type</span>
              <span class="spec-val">${car.fuel}</span>
            </div>
          </div>
          <div class="spec-box">
            <i class="fa-solid fa-gears"></i>
            <div class="spec-info">
              <span class="spec-title">Transmission</span>
              <span class="spec-val">${car.transmission}</span>
            </div>
          </div>
        </div>

        <div class="car-footer">
          <div class="price-box">
            <span class="car-price">${car.priceDisplay}</span>
            <span class="car-emi">EMI from ${car.emi}</span>
          </div>
          <button class="btn btn-primary btn-sm view-details-btn" data-id="${car.id}">
            Book Test Drive
          </button>
        </div>
      </div>
    `;
    carsContainer.appendChild(card);
  });

  // Attach click to "Book Test Drive"
  document.querySelectorAll(".view-details-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.getAttribute("data-id"));
      openCarDetails(id);
    });
  });

  // Attach click to Wishlist like buttons
  document.querySelectorAll(".like-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = parseInt(btn.getAttribute("data-id"));
      toggleWishlist(id);
    });
  });
}

// Wishlist Functionality
function toggleWishlist(carId) {
  const index = wishlist.indexOf(carId);
  const car = CARS_DATA.find(c => c.id === carId);
  if (index > -1) {
    wishlist.splice(index, 1);
    showToast(`Removed ${car.name} from saved cars.`);
  } else {
    wishlist.push(carId);
    showToast(`❤️ Added ${car.name} to your saved cars!`);
  }
  localStorage.setItem("apex_wishlist", JSON.stringify(wishlist));
  updateWishlistCount();
  renderCars();
}

function updateWishlistCount() {
  if (wishlistCountEl) {
    wishlistCountEl.textContent = wishlist.length;
  }
}

wishlistBtn.addEventListener("click", () => {
  if (wishlist.length === 0) {
    showToast("Your wishlist is empty! Click the heart on any car to save it.");
  } else {
    showToast(`You have ${wishlist.length} car(s) saved in your favorites.`);
  }
});

// Open Car Details & Test Drive Booking Modal
function openCarDetails(carId) {
  const car = CARS_DATA.find(c => c.id === carId);
  if (!car) return;

  carModalContent.innerHTML = `
    <div class="car-detail-modal-layout">
      <div>
        <img src="${car.image}" alt="${car.name}" class="modal-car-img" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${car.fallbackImage}';" />
        <h2>${car.name} - ${car.year}</h2>
        <p style="color: var(--text-muted); margin-bottom: 0.75rem;">${car.variant} • ${car.owners}</p>
        <p style="font-size: 0.95rem; margin-bottom: 1.25rem;">${car.description}</p>
        
        <div class="car-specs-grid" style="border-radius: 8px; background: rgba(255,255,255,0.03); padding: 1rem;">
          <div class="spec-box">
            <i class="fa-solid fa-road"></i>
            <div class="spec-info">
              <span class="spec-title">Kilometer Run</span>
              <span class="spec-val">${car.km.toLocaleString()} km</span>
            </div>
          </div>
          <div class="spec-box">
            <i class="fa-solid fa-calendar"></i>
            <div class="spec-info">
              <span class="spec-title">Manufacturing Year</span>
              <span class="spec-val">${car.year}</span>
            </div>
          </div>
          <div class="spec-box">
            <i class="fa-solid fa-tag"></i>
            <div class="spec-info">
              <span class="spec-title">Total Cost</span>
              <span class="spec-val" style="color: #10b981;">${car.priceDisplay}</span>
            </div>
          </div>
          <div class="spec-box">
            <i class="fa-solid fa-shield-heart"></i>
            <div class="spec-info">
              <span class="spec-title">Inspection</span>
              <span class="spec-val">150-Pt Passed</span>
            </div>
          </div>
        </div>
      </div>

      <div class="booking-form">
        <h4>Book Free Doorstep Test Drive</h4>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">
          Experience the drive before you decide. Our representative will bring the vehicle to your location.
        </p>
        <form id="test-drive-form">
          <div class="input-field">
            <label>Your Full Name</label>
            <input type="text" id="td-name" required placeholder="Enter full name" />
          </div>
          <div class="input-field">
            <label>Contact Phone</label>
            <input type="tel" id="td-phone" required placeholder="+91 98765 43210" />
          </div>
          <div class="input-field">
            <label>Preferred Date</label>
            <input type="date" id="td-date" required />
          </div>
          <button type="submit" class="btn btn-primary btn-block">Confirm Appointment</button>
        </form>
      </div>
    </div>
  `;

  carModal.classList.add("active");

  // Handle Form Submission
  document.getElementById("test-drive-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("td-name").value;
    carModal.classList.remove("active");
    showToast(`🎉 Test Drive Booked! Our team will call ${name} shortly to confirm.`);
  });
}

// Category Tabs
filterTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    filterTabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    activeCategory = tab.getAttribute("data-category");
    renderCars();
  });
});

// Search input
searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value.trim();
  renderCars();
});

heroSearchBtn.addEventListener("click", () => {
  activeCategory = heroTypeFilter.value;
  filterTabs.forEach(t => {
    if (t.getAttribute("data-category") === activeCategory) t.classList.add("active");
    else t.classList.remove("active");
  });
  renderCars();
  document.getElementById("inventory").scrollIntoView({ behavior: "smooth" });
});

// Sort select
sortSelect.addEventListener("change", (e) => {
  sortBy = e.target.value;
  renderCars();
});

// Reset filters
resetFiltersBtn.addEventListener("click", () => {
  activeCategory = "all";
  searchQuery = "";
  searchInput.value = "";
  filterTabs.forEach(t => t.classList.remove("active"));
  filterTabs[0].classList.add("active");
  renderCars();
});

// --- Interactive EMI Calculator Logic ---
const loanSlider = document.getElementById("loan-slider");
const downPaymentSlider = document.getElementById("down-payment-slider");
const tenureSlider = document.getElementById("tenure-slider");
const interestSlider = document.getElementById("interest-slider");

const loanAmountVal = document.getElementById("loan-amount-val");
const downPaymentVal = document.getElementById("down-payment-val");
const tenureVal = document.getElementById("tenure-val");
const interestVal = document.getElementById("interest-val");

const monthlyEmiResult = document.getElementById("monthly-emi-result");
const resPrincipal = document.getElementById("res-principal");
const resInterest = document.getElementById("res-interest");
const resTotal = document.getElementById("res-total");

function calculateEMI() {
  const totalCost = parseFloat(loanSlider.value);
  const downPayment = parseFloat(downPaymentSlider.value);
  const principal = Math.max(0, totalCost - downPayment);
  const annualInterest = parseFloat(interestSlider.value);
  const monthlyRate = annualInterest / 12 / 100;
  const years = parseInt(tenureSlider.value);
  const totalMonths = years * 12;

  // Display Slider Values
  loanAmountVal.textContent = `₹${totalCost.toLocaleString('en-IN')}`;
  downPaymentVal.textContent = `₹${downPayment.toLocaleString('en-IN')}`;
  tenureVal.textContent = `${years} Year${years > 1 ? 's' : ''} (${totalMonths} Mos)`;
  interestVal.textContent = `${annualInterest.toFixed(1)}%`;

  // EMI Formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
  let emi = 0;
  if (principal > 0 && monthlyRate > 0) {
    const factor = Math.pow(1 + monthlyRate, totalMonths);
    emi = Math.round((principal * monthlyRate * factor) / (factor - 1));
  }

  const totalPayment = emi * totalMonths;
  const totalInterest = Math.max(0, totalPayment - principal);

  monthlyEmiResult.textContent = `₹${emi.toLocaleString('en-IN')}`;
  resPrincipal.textContent = `₹${principal.toLocaleString('en-IN')}`;
  resInterest.textContent = `₹${totalInterest.toLocaleString('en-IN')}`;
  resTotal.textContent = `₹${totalPayment.toLocaleString('en-IN')}`;
}

[loanSlider, downPaymentSlider, tenureSlider, interestSlider].forEach(slider => {
  slider.addEventListener("input", calculateEMI);
});

document.getElementById("apply-finance-btn").addEventListener("click", () => {
  showToast("📋 Loan pre-approval request submitted! Our finance partner will contact you.");
});

// --- Sell Your Car Instant Valuation ---
const sellCarForm = document.getElementById("sell-car-form");
sellCarForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const model = document.getElementById("sell-model").value;
  const year = parseInt(document.getElementById("sell-year").value);
  const km = parseInt(document.getElementById("sell-km").value);

  // Dynamic Valuation Estimation
  let baseVal = 2200000;
  const age = Math.max(0, 2026 - year);
  baseVal -= (age * 130000);
  baseVal -= (km * 4.5);
  const minVal = Math.max(300000, Math.round(baseVal * 0.95));
  const maxVal = Math.max(350000, Math.round(baseVal * 1.1));

  showToast(`🚗 Estimated Valuation for ${model}: ₹${(minVal/100000).toFixed(2)}L - ₹${(maxVal/100000).toFixed(2)}L. Our team will contact you!`);
  sellCarForm.reset();
});

// Auth Modal Open/Close
openLoginBtn.addEventListener("click", () => authModal.classList.add("active"));
closeAuthModal.addEventListener("click", () => authModal.classList.remove("active"));
closeCarModal.addEventListener("click", () => carModal.classList.remove("active"));

window.addEventListener("click", (e) => {
  if (e.target === authModal) authModal.classList.remove("active");
  if (e.target === carModal) carModal.classList.remove("active");
});

// Tab Switch inside Auth Modal
tabLogin.addEventListener("click", () => {
  tabLogin.classList.add("active");
  tabRegister.classList.remove("active");
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
});

tabRegister.addEventListener("click", () => {
  tabRegister.classList.add("active");
  tabLogin.classList.remove("active");
  registerForm.classList.add("active");
  loginForm.classList.remove("active");
});

// Auth Simulation with localStorage
function checkUserSession() {
  const user = JSON.parse(localStorage.getItem("apex_user"));
  if (user) {
    authButtons.style.display = "none";
    userProfile.style.display = "flex";
    userDisplayName.textContent = `Hi, ${user.name}`;
  } else {
    authButtons.style.display = "block";
    userProfile.style.display = "none";
  }
}

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const name = email.split("@")[0];
  const user = { name: name.charAt(0).toUpperCase() + name.slice(1), email };
  localStorage.setItem("apex_user", JSON.stringify(user));
  authModal.classList.remove("active");
  checkUserSession();
  showToast(`Welcome back, ${user.name}!`);
});

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("reg-name").value;
  const email = document.getElementById("reg-email").value;
  const user = { name, email };
  localStorage.setItem("apex_user", JSON.stringify(user));
  authModal.classList.remove("active");
  checkUserSession();
  showToast(`Account created successfully! Welcome to Apex Motors, ${name}.`);
});

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("apex_user");
  checkUserSession();
  showToast("Logged out successfully.");
});

// Toast notification
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 4500);
}

// Initialize on Load
document.addEventListener("DOMContentLoaded", () => {
  renderCars();
  updateWishlistCount();
  checkUserSession();
  calculateEMI();
});
