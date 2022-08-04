import "./headersection.css"

export function HeaderSection({ name }) {
    return (
        <>
            <div className="header-section">
                {name}
            </div>
            <hr />
        </>
    )

}