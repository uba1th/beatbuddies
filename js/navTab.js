let navLink = document.querySelectorAll('.nav-holder ul li a');
let tabPane = document.querySelectorAll('.tab-holder .tab-content');
console.log(tabPane);

navLink.forEach( link => {
  link.addEventListener('click', (e) => {
    // alert('working');
    e.preventDefault();

    let targetEle = link.dataset.tab;
    console.log(targetEle);

    navLink.forEach(navLink=> navLink.classList.remove('active'));
    tabPane.forEach(tabPane=> tabPane.classList.remove('active'));

    link.classList.add('active');
    document.getElementById(targetEle).classList.add('active');

  });
});
