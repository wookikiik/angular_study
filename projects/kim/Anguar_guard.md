

# Anguar Guard

- Guard 는 페이지 이동에 의한 라우팅 처리 중에 작동하는 서비스를 말하는데, 아래 5가지의 Interface 를 제공한다
- resolve, canActivate, canDeactivate, canLoad, CanActivateChild

## Guard 의 인터페이스

### resolve

- 해당 path 로 라우팅되어 화면이 이동할 때 표시되는 컴포넌트가 필요한 데이터를 미리 받아오는 역할을 한다.
- 가드 로직 처리시간이 오래걸리면, 그 만큼 컴포넌트생성이 늦어지고 화면에 아무것도 표시되지 않는 시간이 길어지는 단점이 있다.
- 
    ```
    - 라우팅에 의해 페이지가 이동 할 때, ExComponent 에서 사용 될 ExValiable 의 값을 ExValiableResolver 의 resolve 함수에서 return 한 값으로 받아온다.

    const routes: Routes = [
    {
        path: '',
        component: ExComponent,
        canActivate: [AuthGuard],
        resolve: {
        ExValiable: ExValiableResolver
        }
    }
    }
    ```

### canActivate

- 화면에 표시될 컴포넌트의 생성여부를 결정하여 조회를 제한할 때 사용할 수 있다.
- resolve 가드보다 앞서서 작동한다.
- 가드의 함수가 true 를 리턴하면 새 컴포넌트가 생성된다.
- 가드의 함수가 false 를 리턴하면 라우팅 처리는 취소되고 이전 컴포넌트가 유지된다.
- 
    ```
    - 라우팅에 의해 페이지가 이동 할 때, ExGuard 의 canActivate 함수가 true 를 return 할 경우 화면에 표시될 ExComponent 를 새로 생성하며, false 일 경우 기존의 컴포넌트가 유지된다.

    const routes: Routes = [
    {
        path: '',
        component: ExComponent,
        canActivate: [ExGuard]
    }
    }
    ```

### canDeactivate

- 가드의 함수가 true 를 리턴하면 현재 컴포넌트를 파괴하고 라우팅 로직에 따라 새 컴포넌트가 생성된다.
- 가드의 함수가 false 를 리턴하면 라우팅 처리를 취소하여 현재 컴포넌트가 유지된다.
- 
    ```
    - ExGuard 의 canDeactivate 함수에서 이전 컴포넌트를 참조하여 파라미터로 받아 컴포넌트의 상태를 처리할 수 있다.

    const routes: Routes = [
    {
        path: '',
        component: ExComponent,
        canDeactivate: [ExGuard]
    }
    }
    ```

### canLoad

- 모듈을 LazyLoading 하는 경우, 모듈의 컴포넌트를 화면에 표시하기 전 작동한다.
- 이 가드로 모듈의 기동여부를 결정할 수 있다. 모듈이 기동한 다음부터는 다시 작동하지 않는다.
- 
    ```
    const routes: Routes = [
    {
        path: '',
        component: ExComponent,
        canLoad: [ExGuard]
    }
    }
    ```

### CanActivateChild

- 중첩 컴포넌트를 화면에 배치할 때, 배치되는 컴포넌트가 <router-outlet> 을 가진 경우, 이렇게 배치되는 자식 컴포넌트에게 공통적으로 적용하여 기동여부를 결정할 수 있다.
- 
    ```
    - 자식 컴포넌트의 CanActivateChild 함수에서 false 를 return 받게 된다면 부모 컴포넌트의 화면을 구성하지 못해 라우팅 처리는 취소된다.

    const routes: Routes = [
    {
        path: 'parent',
        component: ParentComponent,
        CanActivateChild: [ExGuard],
        children: [
            { path : 'first' component: firstChildComponent }
            { path : 'second' component: secondChildComponent }
        ]
    }
    }
    ```











