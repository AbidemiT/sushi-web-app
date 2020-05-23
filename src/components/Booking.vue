<template>
  <div>
    <div class="booking-container">
      <div class="book-here">
        <div class="heading">
          <h2>Book here</h2>
        </div>
        <div class="form-container">
          <form class="form">
            <div class="row">
              <div class="col first-column">
                <div class="select-container">
                  <label for="people">How many people?</label>
                  <select>
                    <option>2 people</option>
                    <option>3 people</option>
                    <option>4 people</option>
                    <option>5 people</option>
                  </select>
                </div>
                <div class="input-container">
                  <label for="name">Name</label>
                  <input type="text" placeholder="Full Name" />
                </div>
              </div>
              <div class="col second-column">
                <div class="input-container">
                  <label for="date">When is your date?</label>
                  <input type="date" />
                </div>
                <div class="input-container">
                  <label for="email">Email</label>
                  <input type="email" placeholder="Your Email Address" />
                </div>
              </div>
              <div class="col third-column">
                <div class="input-container">
                  <label for="time">Time</label>
                  <input type="time" />
                </div>
                <div class="input-container">
                  <label for="phone">Phone</label>
                  <input type="tel" placeholder="Your Phone Number" />
                </div>
              </div>
            </div>
            <div class="btn-container">
              <button class="btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="discover-menu">
      <div class="heading">
        <h3 class="first">Discover</h3>
        <h2>OUR NEW MENU</h2>
      </div>
      <div class="cards-container">
          <div class="cards">
        <div class="card">
          <img src="../assets/img/food.png" alt="Slices Food Image" />
          <div class="content">
            <div class="name-date">
              <h4>Food / 16 March, 2019</h4>
            </div>
            <div class="p-content">
              <h4>Lorem ipsum dolor sit.</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium.</p>
            </div>
            <div class="readmore">
              <a href>Read More</a>
            </div>
          </div>
        </div>
        <div class="card">
          <img src="../assets/img/spices.png" alt="Spices Food Image" />
          <div class="content">
            <div class="name-date">
              <h4>Spices / 16 March, 2019</h4>
            </div>
            <div class="p-content">
              <h4>Lorem ipsum dolor sit.</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium.</p>
            </div>
            <div class="readmore">
              <a href>Read More</a>
            </div>
          </div>
        </div>
        <div class="card">
          <img src="../assets/img/chicken-curry.png" alt="Chicken Curry Food Image" />
          <div class="content">
            <div class="name-date">
              <h4>Chicken Curry / 16 March, 2019</h4>
            </div>
            <div class="p-content">
              <h4>Lorem ipsum dolor sit.</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium.</p>
            </div>
            <div class="readmore">
              <a href>Read More</a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>