const Footer = () => (
    <footer className="bg-text text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Sara Furutani. All rights reserved.</p>
        <div className="mt-2">
          <a href="mailto:sarafurutani@gmail.com" className="hover:underline">Email</a> | 
          <a href="https://linkedin.com/in/safurutani" target="_blank" rel="noopener noreferrer" className="hover:underline"> LinkedIn</a> |
          <a href="https://github.com/safurutani" target="_blank" rel="noopener noreferrer" className="hover:underline"> GitHub</a>
        </div>
      </div>
    </footer>
  );
  
  export default Footer;
  