import Navigation from "../components/navigation"


export const metadata = {
  title : {
    template: "%s | Next movies",
    default: "Loading..."
  },
  description: 'The Best movies on the best framwork',
}

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
