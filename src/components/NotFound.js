import React from "react";
import './styles/NotFound.css'
const NotFound = () => {
    document.title = "Page non trouvée - Recetti";
    return (
        <div>
            <div class="container 404-body">
                <div class="caption">
                    <div class="head-text">Page Non Trouvée !</div>
                </div>
                <div class="head">
                    <div class="pan-wrapper">
                        <div class="center">
                            <div class="sub-center">
                                <div class="egg">
                                    <div class="yolk"></div>
                                </div>
                            </div>
                        </div>
                        <div class="handle"></div>
                        <div class="handle-sub"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound;