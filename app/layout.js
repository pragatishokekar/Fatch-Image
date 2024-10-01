
import './globals.css';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      { children }
      </body>
    </html>
  );
}

// import Header from '@/Components/Header'; // Ensure the correct path
// import './globals.css';

// const RootLayout = ({ children }) => {
//   return (
//     <html lang="en">
//       <body>
//         <Header />
//         {children}
//       </body>
//     </html>
//   );
// };

// export default RootLayout;



