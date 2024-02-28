const H2 = React.createElement("h2",{className:'h2'},"hello mishra")
const P = React.createElement('p',{className:'p'},"i am vibhakarmishra")
const Img = React.createElement('img',{src:'https://media.istockphoto.com/id/174812956/photo/dozen-roses.jpg?s=612x612&w=0&k=20&c=G30YG1YC3uAyNVVEPHM6YWVMuZJZ5vcjZ5iVrpi5jgk=',alt:'rose'})

const Div = React.createElement('div',{},[H2,P,Img])

ReactDOM.render(Div,document.getElementById('root'));
