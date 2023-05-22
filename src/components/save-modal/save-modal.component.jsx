import "./_save-modal.scss"

const SaveModal = ({ message }) => {
  return (
    <div className='save-modal'>
      <div className='save-modal__text'>{message}</div>
    </div>
  )
}

export default SaveModal
