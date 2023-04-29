# Component Hierarchy

The Smart Style Co. application has the following Component Hierarchy:

```kotlin
<App>
  <Router>
    <Header>
      <Logo />
      <Navigation />
      <SearchBar />
      <CartButton />
      <LoginButton />
    </Header>
    <Switch>
      <Route exact path="/">
        <HomePage>
          <HeroSection />
          <FeaturedProducts />
          <NewsSection />
        </HomePage>
      </Route>
      <Route exact path="/shop">
        <ProductListPage>
          <ProductFilter />
          <ProductList />
          <Pagination />
        </ProductListPage>
      </Route>
      <Route path="/products/:id">
        <ProductDetail />
      </Route>
      <Route path="/cart">
        <CartPage>
          <CartItems />
          <CartSummary />
          <CheckoutButton />
        </CartPage>
      </Route>
      <Route path="/login">
        <LoginPage>
          <LoginForm />
        </LoginPage>
      </Route>
      <Route path="/signup">
        <SignupPage>
          <SignupForm />
        </SignupPage>
      </Route>
    </Switch>
    <Footer>
      <Navigation />
      <SocialMediaLinks />
      <NewsletterSubscription />
    </Footer>
  </Router>
</App>


```
