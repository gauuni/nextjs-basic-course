import Link from 'next/link'

export default function FourOhFour() {
  return (
    <div className="text-center vh-100 d-flex flex-column justify-content-center">
      <div className="text-uppercase">oops! Page Not Found</div>
      <div
        style={{
          fontSize: '140px',
          fontWeight: '500px',
          lineHeight: '120px',
          color: 'gray',
          opacity: '50%',
        }}
      >
        404
      </div>
      <div className="text-uppercase">
        we are sorry, but the page you requested was not found
      </div>
    </div>
  )
}
