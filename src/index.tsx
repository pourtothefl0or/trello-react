import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/normalize.css';
import './styles/common.css';
import Index from './pages/Index';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<Index />);

// console.log(JSON.parse(localStorage.getItem('users')!));
// console.log(JSON.parse(localStorage.getItem('titles')!));
// console.log(JSON.parse(localStorage.getItem('cards')!));
// console.log(JSON.parse(localStorage.getItem('comments')!));

// localStorage.setItem(
//   'users',
//   JSON.stringify([
//     {
//       id: 1,
//       name: 'Biba',
//     },
//     {
//       id: 2,
//       name: 'Ne Biba',
//     },
//   ])
// );

// localStorage.setItem(
//   'titles',
//   JSON.stringify([
//     {
//       id: 1,
//       title: 'To Do'
//     },
//     {
//       id: 2,
//       title: 'In progress'
//     },
//     {
//       id: 3,
//       title: 'Testing'
//     },
//     {
//       id: 4,
//       title: 'Done'
//     },
//   ])
// );

// localStorage.setItem(
//   'cards',
//   JSON.stringify([
//     {
//       id: 1,
//       idTitle: 1,
//       title: 'Brainstorming',
//       description: 'Old fashioned recipe for preventing allergies and chemical sensitivities',
//     },
//     {
//       id: 2,
//       idTitle: 1,
//       title: 'Brainstorming',
//       description: 'Home business advertising ideas',
//     },
//     {
//       id: 3,
//       idTitle: 1,
//       title: 'Brainstorming',
//       description: 'Cosmetic surgery abroad making the right choice',
//     },
//     {
//       id: 4,
//       idTitle: 2,
//       title: 'Brainstorming',
//       description: 'Unmatched toner cartridge quality 20 less than oem price',
//     },
//     {
//       id: 5,
//       idTitle: 2,
//       title: 'Brainstorming',
//       description: 'How to look up',
//     },
//     {
//       id: 6,
//       idTitle: 3,
//       title: 'Brainstorming',
//       description: 'Types of paper in catalog printing',
//     },
//     {
//       id: 7,
//       idTitle: 3,
//       title: 'Brainstorming',
//       description: 'There is no competition',
//     },
//     {
//       id: 8,
//       idTitle: 4,
//       title: 'Brainstorming',
//       description: 'Linux or windows which is it',
//     },
//     {
//       id: 9,
//       idTitle: 4,
//       title: 'Brainstorming',
//       description: 'Be single minded',
//     },
//     {
//       id: 10,
//       idTitle: 4,
//       title: 'Brainstorming',
//       description: 'Linux or windows which is it',
//     },
//     {
//       id: 11,
//       idTitle: 4,
//       title: 'Brainstorming',
//       description: 'Dna the future of nutrition',
//     },
//   ])
// );

// localStorage.setItem(
//   'comments',
//   JSON.stringify([
//     {
//       id: 1,
//       idCard: 1,
//       idUser: 1,
//       comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//     },
//     {
//       id: 2,
//       idCard: 1,
//       idUser: 1,
//       comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sapiente odio ratione aliquam nesciunt sint ex voluptas dolorum.',
//     },
//     {
//       id: 3,
//       idCard: 1,
//       idUser: 2,
//       comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sapiente odio ratione aliquam nesciunt sint ex voluptas dolorum. Est facere nam repudiandae culpa consectetur alias iste ut consequatur unde tenetur?',
//     },
//   ])
// );
