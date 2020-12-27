<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;

use App\Http\Controllers\Controller;
use App\Models\Ryouri;

class RyouriController extends Controller {

    public function regist(Request $req) {
        $data = $req->all();
        $mdl = new Ryouri;
        $mdl->name = $data['name'];
        $mdl->yomigana = $data['yomigana'];
        $mdl->category = $data['category'];
        $mdl->tags = $data['tags'];
        $mdl->kcal = $data['kcal'];
        $mdl->jikan = $data['jikan'];
        $mdl->zairyou = $data['zairyou'];
        $mdl->tsukurikata = $data['tsukurikata'];
        $mdl->user_id = Auth::id();
        $mdl->save();
        return ['result' => 'ok'];
    }

    public function remove(Request $req) {
        $mdl = Ryouri::where('id', $req->input('id'))->first();
        $mdl->delete();
        return ['result' => 'ok'];
    }

    public function getAll() {
        return Ryouri::with('user')->orderBy('id', 'desc')->get();
    }

    public function findName(Request $req) {
        return Ryouri::with('user')->where('name', 'like', '%' . $req->query('name') . '%')
            ->orderBy('id', 'desc')->get();
    }

    public function findYomigana(Request $req) {
        $kana = $req->query('yomigana');
        return Ryouri::with('user')->where([
            ['yomigana', 'like', '%' . $kana . '%'],
            ['yomigana', 'like', '%' . mb_convert_kana($kana, 'C') . '%']
        ])->orderBy('id', 'desc')->get();
    }

    public function findCategory(Request $req) {
        return Ryouri::with('user')->where('category', 'like', '%' . $req->query('category') . '%')
            ->orderBy('id', 'desc')->get();
    }

    public function findTags(Request $req) {
        return Ryouri::with('user')->where('tags', 'like', '%' . $req->query('tags') . '%')
            ->orderBy('id', 'desc')->get();
    }

    public function findKcal(Request $req) {
        return Ryouri::with('user')->where('kcal', '<=', $req->query('kcal'))
            ->orderBy('id', 'desc')->get();
    }

    public function findJikan(Request $req) {
        return Ryouri::with('user')->where('jikan', '<=', $req->query('jikan'))
            ->orderBy('id', 'desc')->get();
    }

    public function findZairyou(Request $req) {
        return Ryouri::with('user')->where('zairyou', 'like', '%' . $req->query('zairyou') . '%')
            ->orderBy('id', 'desc')->get();
    }

    public function findTsukurikata(Request $req) {
        return Ryouri::with('user')->where('tsukurikata', 'like', '%' . $req->query('tsukurikata') . '%')
            ->orderBy('id', 'desc')->get();
    }

    public function findUser(Request $req) {
        return Ryouri::with('user')->where('user_id', Auth::id())->orderBy('id', 'desc')->get();
    }

    public function findUserName(Request $req) {
        return Ryouri::with('user')->whereHas('user', function (Builder $query) use ($req) {
            $query->where('name', 'like', '%' . $req->query('username') . '%');
        })->orderBy('id', 'desc')->get();
    }

}