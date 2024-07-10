using QuizApp.Entities;

namespace QuizApp.Controllers;

[Authorize]
public class UsersController : Controller
{
    private IHttpClientFactory _httpClientFactory;

    public UsersController(IHttpClientFactory httpClientFactory)
    {
        _httpClientFactory = httpClientFactory;
    }

    // GET: Users
    public async Task<IActionResult> Index()
    {
        HttpClient httpClient = _httpClientFactory.CreateClient("API");
        var users = await httpClient
            .GetFromJsonAsync<IEnumerable<User>>("api/Users");
        return View(users);
    }

    // GET: Users/Details/5
    public async Task<IActionResult> Details(int? id)
    {
        if (id == null)
        {
            return NotFound();
        }

        HttpClient httpClient = _httpClientFactory.CreateClient("API");
        var user = await httpClient.
            GetFromJsonAsync<User>($"api/Users/{id}");
        if (user == null)
        {
            return NotFound();
        }
        return View(user);
    }

    // GET: Users/Create
    public IActionResult Create()
    {
        return View();
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Create(User user)
    {
        if (ModelState.IsValid)
        {
            var httpClient = _httpClientFactory.CreateClient("API");
            var response = await httpClient.
                PostAsJsonAsync("api/users", user);
            if (response.IsSuccessStatusCode)
            {
                return RedirectToAction(nameof(Index));
            }
        }
        return View(user);
    }

    // GET: Users/Edit/5
    public async Task<IActionResult> Edit(int? id)
    {
        if (id == null)
        {
            return NotFound();
        }

        HttpClient httpClient = _httpClientFactory.CreateClient("API");
        var user = await httpClient.
            GetFromJsonAsync<User>($"api/Users/{id}");

        if (user == null)
        {
            return NotFound();
        }

        return View(user);
    }

    // POST: Users/Edit/5
    // To protect from overposting attacks, enable the specific properties you want to bind to.
    // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Edit(int id, User user)
    {
        if (ModelState.IsValid)
        {
            HttpClient httpClient = _httpClientFactory.CreateClient("API");
            var response = await httpClient.
                PutAsJsonAsync($"api/user/{id}", user);
            if (response.IsSuccessStatusCode)
            {
                return RedirectToAction(nameof(Index));
            }
        }
        return View(user);
    }

    // GET: Users/Delete/5
    public async Task<IActionResult> Delete(int? id)
    {
        if (id == null)
        {
            return NotFound();
        }

        HttpClient httpClient = _httpClientFactory.CreateClient("API");
        var user = await httpClient
            .GetFromJsonAsync<User>($"api/Users/{id}");

        if (user == null)
        {
            return NotFound();
        }

        return View(user);
    }

    // POST: Users/Delete/5
    [HttpPost, ActionName("Delete")]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> DeleteConfirmed(int id)
    {
        HttpClient httpClient = _httpClientFactory.CreateClient("API");
        var response = await httpClient.
            DeleteAsync($"api/users/{id}");
        if (response.IsSuccessStatusCode)
        {
            return RedirectToAction(nameof(Index));
        }

        return NotFound();
    }
}
