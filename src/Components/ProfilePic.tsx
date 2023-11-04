
import pillar from "../assets/pillar.jpg"
function ProfilePic() {
  return (
    <div className='fixed mt-[90px]'>
        <img src={pillar}
        className='h-screen object-cover w-screen'/>
    </div>
  )
}

export default ProfilePic