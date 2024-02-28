const load = async (searchText, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    const phones = data.data;
    console.log(phones)
    displayPhones(phones, isShowAll);
}

const displayPhones = (phones, isShowAll) =>{
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    const showAll = document.getElementById('show-all');
    if(phones.length > 12 && !isShowAll){
        showAll.classList.remove('hidden')
    }
    else{
        showAll.classList.add('hidden')
    }
    
    if(!isShowAll){
        phones = phones.slice(0, 12)
    }

   phones.forEach(phone => {
    const div = document.createElement('div');
    div.classList = `card border border-[#CFCFCF] rounded-lg shadow-xl`
    div.innerHTML = `
    <figure class="m-6 py-12 rounded-lg bg-[#0D6EFD0D]">
                      <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                      <h2 class="card-title text-2xl font-bold text-[#403F3F]">${phone.phone_name}</h2>
                      <p class="text-lg text-[#706F6F]">There are many variations of passages of available, but the majority have suffered</p>
                      <h3 class="text-2xl font-bold text-[#403F3F]">$999</h3>
                      <div class="card-actions">
                        <button class="btn bg-[#0D6EFD] text-white text-xl px-6 py-2 font-semibold">Show Details</button>
                      </div>
                    </div>
    `;
    phoneContainer.appendChild(div);
    });

   loading(false);
}





const  search =(isShowAll) => {
    const inputSearch = document.getElementById('search-input');
    const searchText = inputSearch.value;
    console.log(searchText)
    loading(true)
    load(searchText, isShowAll);
}
// load();

const loading = (isLoading) => {
    const loading = document.getElementById('loading');
    if(isLoading){
        loading.classList.remove('hidden')
    }
    else{
        loading.classList.add('hidden')
    }

}

const showAll = (isShowAll) => {
    search(true);
}