import CommitteeSidebar from '../CommitteeSidebar/CommitteeSidebar'
import CommitteeNav from '../committeeNav/CommitteeNav'
import "./committeeHome.scss"
import CommitteeFeatured from '../committeeFeatured/CommitteeFeatured'
import CommitteeTable from '../CommitteeTable/CommitteeTable'
import { Button } from "@material-ui/core"
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../context/AuthContext';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../../../../firebase';

function CommitteeHome() {
  const { currentUser } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (currentUser) {
        const userDoc = doc(db, 'user', currentUser.uid);
        const userSnapshot = await getDoc(userDoc);
        if (userSnapshot.exists()) {
          const userData = userSnapshot.data();
          setUserData(userData);
        }
      }
    };

    fetchUserData();
  }, [currentUser]);

  return (
    <div className="commhome">
      <CommitteeSidebar/>
      <div className="commhomeContainer">
        <CommitteeNav/>
        <div className="top">
          <div className="left">
            <div className="editButton">
              <Button>
                <Link to="/admin/magazinecommittee/edit">
                  edit
                </Link>
              </Button>
            </div>
            <h1 className="title">User Information</h1>
            {userData && (
              <div className="item">
                <div className="details">
                  <h1 className="itemTitle">{userData.name}</h1>
                  <img className="itemImg" src={userData.profilePhotoUrl} alt="" />
                  <div className="detailitem">
                    <span className="itemKey">Batch:</span>
                    <span className="itemValue">{userData.batch}</span>
                  </div>
                  <div className="detailitem">
                    <span className="itemKey">Specialization:</span>
                    <span className="itemValue">{userData.specialization}</span>
                  </div>
                  <div className="detailitem">
                    <span className="itemKey">Email:</span>
                    <span className="itemValue">{userData.email}</span>
                  </div>
                  <div className="detailitem">
                    <span className="itemKey">Phone:</span>
                    <span className="itemValue">{userData.phoneNumber}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="right">
            <CommitteeFeatured />
          </div>
        </div>
        <div className="userBottom">
          <h1 className="title">Work List</h1>
          <CommitteeTable/>
        </div>
      </div>
    </div>
  )
}

export default CommitteeHome;
