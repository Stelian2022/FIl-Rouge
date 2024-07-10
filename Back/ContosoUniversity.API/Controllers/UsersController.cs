namespace QuizApp.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class UsersController : ControllerBase
{
    private readonly IRepository<User> _repository;

    public UsersController(
        IRepository<User> repository)
    {
        _repository = repository;
    }

    // GET: api/<UsersController>
    [HttpGet]
    public async Task<IEnumerable<User>> Get()
    {
        return await _repository.ListAll();
    }

    // GET: api/Users/5
    [HttpGet("{id}")]
    public async Task<ActionResult<User>> Get(int id)
    {
        var user = await _repository.GetById(id);
        if (user == null)
        {
            return NotFound();
        }
        return user;
    }

    // POST: api/Users
    [HttpPost]
    public async Task<ActionResult<User>> Post(User user)
    {
        await _repository.Insert(user);
        return CreatedAtAction("Get", new { id = user.Id }, user);
    }

    // PUT: api/users/5
    [HttpPut("{id}")]
    public async Task<IActionResult> Put(int id, User user)
    {
        if (id != user.Id)
        {
            return BadRequest();
        }
        await _repository.Update(user);
        return NoContent();
    }

    // DELETE: api/Users/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var user = await _repository.GetById(id);
        if (user == null)
        {
            return NotFound();
        }
        await _repository.Delete(user);
        return NoContent();
    }

}
