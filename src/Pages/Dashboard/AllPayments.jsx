

const AllPayments = () => {
    return (
        <div className='py-5 space-y-5'>
        <div className='w-full  py-6 px-3 flex justify-between items-center shadow-md rounded-md'>
       <div className='flex items-center gap-2'><MdDashboard className='text-3xl text-blue-600'></MdDashboard> <h3 className='text-xl '>Home/Employees</h3></div>
       <h3 className='text-2xl font-semibold'>Employees</h3>
        </div>
        <div className='w-full  py-6 px-3 shadow-md rounded-md'>
            <h1 className='text-2xl text-black font- font-semibold '>8 People found</h1>
        </div>
        <div className="overflow-x-auto shadow-lg">
  <table className="table">
    {/* head */}
    <thead className='text-black'>
      <tr>
        <th>User</th>
        <th>Name</th>
        <th>Email</th>
        <th>Verified</th>
        <th>Bank ac</th>
        <th>Salary</th>
        <th>Action</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users?.map((user,index)=>{
          return  <tr key={index}>
            <td>
          <div className="flex items-center gap-3">
            <div className="">
              <div className=" ">
                <img src={user.image} alt=" " className='w-10 h-10 rounded-full'/>
              </div>
            </div>
           
          </div>
        </td>
        <td>
            
            <h1 className='text-l'>{user.name}</h1>
               <br/>
          {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
        </td>
        <td>{user.email}</td>
        <td> <button  onClick={()=> handelVerified(user._id,user.isVerified)}>{user.isVerified ? <GiCheckMark className='text-green-600 text-xl'></GiCheckMark> :<RxCross2 className='text-red-600 text-xl '></RxCross2>}</button></td>
        <td>{user.bankAccount}</td>
        <td>BDT {user.salary} </td>
        <td><button className='w-full bg-green-600 text-white py-2' onClick={()=> openModal(user)}>pay</button></td>
        <td>
       
        </td>
      </tr>
        })
      }
      
    </tbody>
    {/* foot */}
    <tfoot>
      {/* <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr> */}
    </tfoot>
    
  </table>
  </div>
        </div>
    );
}

export default AllPayments;
