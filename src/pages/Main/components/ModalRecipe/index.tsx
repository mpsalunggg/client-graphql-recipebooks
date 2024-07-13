const ModalRecipe = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-primary">Add Recipe</h2>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Title</span>
        </label>
        <input type="text" className="input input-bordered input-sm" />
      </div>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Image URL</span>
        </label>
        <input type="text" className="input input-bordered input-sm" />
      </div>
      <div>
        <div className="form-control mt-4">
          <label className="label">
            <span className="label-text">Ingredients</span>
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              className="input input-bordered input-sm w-full"
            />
            <button className="btn btn-primary btn-sm">+</button>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap">
          <div className="badge badge-primary badge-outline rounded-sm">
            Tomat
          </div>
          <div className="badge badge-primary badge-outline rounded-sm">
            Tomato
          </div>
          <div className="badge badge-primary badge-outline rounded-sm">
            Tomato
          </div>
          <div className="badge badge-primary badge-outline rounded-sm">
            Tomato
          </div>
          <div className="badge badge-primary badge-outline rounded-sm">
            Tomato
          </div>
          <div className="badge badge-primary badge-outline rounded-sm">
            Tomato
          </div>
          <div className="badge badge-primary badge-outline rounded-sm">
            Tomato
          </div>
          <div className="badge badge-primary badge-outline rounded-sm">
            Tomato
          </div>
        </div>
      </div>
      <div className="form-control mt-4">
        <label className="label">
          <span className="label-text">Instructions</span>
        </label>
        <textarea className="textarea textarea-bordered" />
      </div>
      <div className="mt-4">
        <button className="btn btn-primary btn-sm w-full">Submit</button>
      </div>
    </div>
  )
}
export default ModalRecipe
