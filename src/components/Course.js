import { LogoutButton } from "../Logout"
import { Profile } from "../Profile"

function Course() {
    return (
        <div className="d-flex flex-raw " >
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: '280px', height: '100vh' }}>
                <h1 className="fs-4 text">Curso de React-Query</h1>
                <iframe width="100%" src="https://www.youtube.com/embed/X1qo8qEaWLg" title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
                    <div style={{marginBottom: 'auto'}}>
                        <ul>
                            <li><a href="#">Leccion 1</a></li>
                            <li><a href="#">Leccion 2</a></li>
                            <li><a href="#">Leccion 3</a></li>
                            <li><a href="#">Leccion 4</a></li>
                            <li><a href="#">Leccion 5</a></li>
                            <li><a href="#">Leccion 6</a></li>
                        </ul>
                    </div>
                
                <Profile />
                <LogoutButton />
            </div>
            <div class="container-fluid" style={{ height: '100vh' }}> Content </div>
        </div>
    )
}

export default Course