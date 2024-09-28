import React from "react";
import '../styles/modal_styles.css';

function Modal() {
    return(
        <div className="add_pin_modal">
            <div className="add_pin_container">
                <div className="side" id="left_side">
                    <div className="section1">
                        <div className="pint_mock_icon_container">
                            <img src="./images/ellipse.png" alt="edit" className="pint_mock_icon"/>
                        </div>
                    </div>
                    <div className="section2">
                        <label htmlFor="upload_img" id="upload_img_label">
                            <div className="upload_img_container">
                                <div id="dotted_border">
                                    <div className="pint_mock_icon_container">
                                      <img src="./images/up-arrow.png" alt="edit" className="pint_mock_icon"/>
                                    </div>
                                    <div>Click to Upload</div>
                                    <div>Recommendation: Use high-quality .jpg less than 20MB</div>
                                </div>
                            </div>
                            <input type="file" name="upload_img" id="upload_img" value=""/>
                        </label>
                    <div className="modals_pin">
                        <div className="pin_image">
                            <img src={pinImage} alt="pin_image"/>
                        </div>
                    </div>
                    </div>

                    <div className="section3">
                        <div className="save_from_site">Save from site</div>
                    </div>
                </div>
                <div className="side" id="right_side">
                    <div className="section1">
                        <div className="select_size">
                            <select name="pin_size" id="pin_size">
                                <option value="">Select</option>
                                <option value="small">small</option>
                                <option value="medium">medium</option>
                                <option value="large">large</option>
                            </select>
                            <div className="save_pin">Save</div>
                        </div>
                    </div>
                    <div className="section2">
                        <input type="text" className="new_pin_input" id="pin_title"/>
                        <input type="text" className="new_pin_input" id="pin_description"/>
                        <input type="text" className="new_pin_input" id="pin_destination"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;