let coll = document.getElementsByClassName('shop_card');
        for (let i = 0; i < coll.length; i++) {
            coll[i].addEventListener('mouseover', function() {
                this.classList.add('active');
                let content = this.lastElementChild;
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + 'px'
                }
            }) 
        }

        for (let i = 0; i < coll.length; i++) {
            coll[i].addEventListener('mouseout', function() {
                this.classList.remove('active');
                let content = this.lastElementChild;
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + 'px'
                }
            }) 
        }



let look = document.getElementsByClassName('look_card');

for (let i = 0; i < look.length; i++) {
    look[i].addEventListener('mouseover', function() {     
        let links = this.lastElementChild;
        links.classList.remove('d-none');
    })
}

for (let i = 0; i < look.length; i++) {
    look[i].addEventListener('mouseout', function() {     
        let links = this.lastElementChild;
        links.classList.add('d-none');
    })
}


const tabsBtn = document.querySelectorAll('.tab_btn');
const tabsItems = document.querySelectorAll('.stores_tab');

tabsBtn.forEach(function(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

       

        if (! currentBtn.classList.contains('btn_active')) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('btn_active');
            });
            tabsItems.forEach(function(item) {
                item.classList.remove('tab_active');
            });
        

        currentBtn.classList.add('btn_active');
        currentTab.classList.add('tab_active');
        }
    })
})






