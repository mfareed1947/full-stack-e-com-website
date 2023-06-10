
const page = ({ params }: any) => {
    const id: number | string = params._id;
    return (
        <div>
            <p>Hello Id {id}</p>
        </div>
    )
}

export default page
