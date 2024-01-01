
import "./../style/edit_profile.css";

function Edit_profile() {
    return (
        <div className="Editprofile">
            <div className="edit-container">
                <h3>Edit profile</h3>
                <div className="from-continer">
                    <form className="register-form">
                        <div class="group username">
                            <label>User Name</label>
                            <input type="text" class="" />
                        </div>
                        <div class="group">
                            <label>Name</label>
                            <input type="text" class="" />
                        </div>
                        <div class="group">
                            <label>Email</label>
                            <input type="text" class="" />
                        </div>
                        <button type="submit">submit </button>
                    </form>

                </div>
            </div>
        </div>

    );
}

export default Edit_profile;