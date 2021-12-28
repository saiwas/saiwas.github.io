import ReactLoading from 'react-loading';

const Loading = ({
    type = 'spin',
    color = '#09ec41',
    height = '5%',
    width = '5%'
}) => {
    return(
        <div className='loading' 
            style={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'darkslategrey'
            }
        }>
            <ReactLoading type={type} color={color} height={height} width={width} />
        </div>
    )
}

export default Loading
