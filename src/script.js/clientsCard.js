document.addEventListener("DOMContentLoaded", () => {
  
  const CLIENTS_CARDS = [
    {
      id: "0",
      img: "Denny.png",
      imgAlt: "Denny",
      description:
        "I know in real-time where the money is spent,and I don’t have to lend out the company’s credit card anymore. What a relief",
      name: "Denny Hilguston",
      address: "@denny.hill",
    },
  
    {
      id: "1",
      img: "Vani.png",
      imgAlt: "Vani",
      description:
        "VISUALS are much better. The improvements in optics and resolution and much more than a modern console generation leap.",
      name: "Vani Pandey",
      address: "@vani.pandey",
    },
  
    {
      id: "2",
      img: "Milly.png",
      imgAlt: "Milly",
      description:
        "I can actually see the improvement in the graphics, not having the external sensors is a big plus.",
      name: "Milly Singh",
      address: "@milly.singh",
    },
  ]
  
    const generateClientsCards = () => {
      const cardsDiv = document.createElement("div");
      cardsDiv.classList.add("generated__clients-cards");
  
      CLIENTS_CARDS.forEach((client) => {
        const cardHTML = `
          <li class="item-fb__card">
              <h5 class="card-logo"><span class="card-logo__span">starstar</span>star</h5>
              <p class="card-text">${client.description}</p>
              <div class="card-info">
                  <img src="../src/assets/images/Clients/${client.img}" alt="${client.imgAlt}" />
                  <div class="card-info__user">
                      <p class="user-name">${client.name}</p>
                      <address class="user-mail">${client.address}</address>
                  </div>
              </div>
          </li>`;
  
        cardsDiv.innerHTML += cardHTML;
      });
      clientsItemFb.appendChild(cardsDiv);
    };
  
    generateClientsCards();
  });
  