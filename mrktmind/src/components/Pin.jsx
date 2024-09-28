import React from "react";

function upload_img(event, setPinImage) {
    if (event.target.files && event.target.files[0]) {
        if (/image\/*/.test(event.target.files[0].type)) {
            const reader = new FileReader();

            reader.onload = function() {
                setPinImage(reader.result);
            }

            reader.readAsDataURL(event.target.files[0]);
        }
    }
}

function Pin(props) {
    const [pinImage, setPinImage] = useState();
    return (
        <div>
            <input onChange={event => upload_img(event, setPinImage)} type="file" name="picture" id="picture" value="" />

            <div className="card">
                <div className="pin_title"></div>
                <div className="pin_modal">
                    <div className="modal_head">
                        <div className="save_card">Save</div>
                    </div>
                    <div className="modal_foot">
                        <div className="destination">
                            <div className="pint_mock_icon_container">
                                <img src="./images/upper-right-arrow.png" alt="destination" className="pint_mock_icon"/>
                            </div>
                            <span>Eatery</span>
                        </div>

                        <div className="pint_mock_icon_container">
                            <img src="./images/send.png" alt="send" className="pint_mock_icon"/>
                        </div>

                        <div className="pint_mock_icon_container">
                            <img src="./images/ellipse.png" alt="edit" className="pint_mock_icon"/>
                        </div>

                    </div>
                </div>

                <div className="pin_image">
                    <img src={pinImage} alt="pin_image"/>
                </div>
            </div>
        </div>
    )
}

const styles = {
    pin: {
        margin: '15px 10px',
        padding: 0,
        borderRadius: '16px',
        backgroundColor: 'red'
    },
    small: {
        gridRowEnd: 'span 26'
    },
    medium: {
        gridRowEnd: 'span 33'
    },
    large: {
        gridRowEnd: 'span 45'
    }
}

export default Pin;