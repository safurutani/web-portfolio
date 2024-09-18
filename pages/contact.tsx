const Contact = () => (
  <div className="container mx-auto p-8 max-w-3xl">
    <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
    <ul className="list-none">
      <li className="mb-4 flex items-center">
        <div className="w-10 flex justify-center">
          <a href="mailto:sarafurutani@gmail.com">
            <i className="fa fa-envelope icon-size" aria-hidden="true"></i>
          </a>
        </div>
        <a href="mailto:sarafurutani@gmail.com" className="hover:underline ml-4">sarafurutani@gmail.com</a>
      </li>
      <li className="mb-4 flex items-center">
        <div className="w-10 flex justify-center">
          <a href="mailto:sarafurutani@gmail.com">
            <i className="fa fa-linkedin-square icon-size" aria-hidden="true"></i>
          </a>
        </div>
        <a href="https://linkedin.com/in/sarafurutani" target="_blank" rel="noopener noreferrer" className="hover:underline ml-4">Sara Furutani</a>
      </li>
      <li className="mb-4 flex items-center">
        <div className="w-10 flex justify-center">
          <a href="mailto:sarafurutani@gmail.com">
            <i className="fa fa-github icon-size" aria-hidden="true"></i>
          </a>
        </div>
        <a href="https://github.com/safurutani" target="_blank" rel="noopener noreferrer" className="hover:underline ml-4">@safurutani</a>
      </li>
      <li className="mb-4 flex items-center">
        <div className="w-10 flex justify-center">
          <a href="mailto:sarafurutani@gmail.com">
            <i className="fa fa-codepen icon-size" aria-hidden="true"></i>
          </a>
        </div>
        <a href="https://codepen.io/safurutani" target="_blank" rel="noopener noreferrer" className="hover:underline ml-4">@safurutani</a>
      </li>
    </ul>
  </div>
);

export default Contact;
