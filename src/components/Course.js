import { LogoutButton } from "../Logout"
import { Profile } from "../Profile"

function Course() {
    return (
        <div className="d-flex flex-raw " >
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: '280px', height: '100vh' }}>
                <h1 className="fs-4 text">This is the landing course</h1>
                <iframe width="100%" src="https://www.youtube.com/embed/X1qo8qEaWLg" title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
                    <div style={{marginBottom: 'auto'}}>
                        <ul>
                            <li>Leccin 1</li>
                            <li>Leccin 1</li>
                            <li>Leccin 1</li>
                            <li>Leccin 1</li>
                            <li>Leccin 1</li>
                            <li>Leccin 1</li>
                            <li>Leccin 1</li>
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