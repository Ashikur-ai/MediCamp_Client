
const Heading = ({heading}) => {
    return (
        <>
            <div className='text-center w-1/2 mt-10 mx-auto'>
                <p className='text-2xl md:text-4xl lg:text-5xl font-bold text-red-700'>{ heading }</p>
                <div className="divider divider-error">Medicamp Association</div>
            </div>   
        </>
    );
};

export default Heading;