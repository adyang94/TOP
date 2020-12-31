import {content} from '../index';
export function contactFramework() {
    console.log('contact module working');
    let contactTitle = document.createElement('h3');
    contactTitle.innerHTML = 'Contact Information:'
    contactTitle.classList.add('moduleTitle');
    content.appendChild(contactTitle);

    let contact = document.createElement('p');
    contact.classList.add('moduleInfo');
    contact.innerHTML = 'Address: <span>111 Tasty Avenue</span> <br> Phone: <span>867-5309</span>'
    content.appendChild(contact);

    let contactImg = document.createElement('img');
    contactImg.src
}